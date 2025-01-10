import React, { useState, useEffect } from 'react';
import homeStyles from '../css/Custom.module.css'; // Import the CSS Module
import Nav from '../Components/Nav';

function Custom() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [pcs, setPcs] = useState([]);
  const [error, setError] = useState(null);

  // Handle form submission to add a new gaming PC
  const handleAddPc = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!name || !price) {
      setMessage('Please provide both name and price');
      return;
    }

    try {
      const response = await fetch('https://api.gamingforcepcs.com/api/gamingpcs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price }),
      });

      if (!response.ok) {
        throw new Error('Failed to add gaming PC');
      }

      const newPc = await response.json();
      setMessage(`New Gaming PC added: ${newPc.name} - $${newPc.price}`);
      setName('');
      setPrice('');
      fetchGamingPCs(); // Refresh the list after adding
    } catch (error) {
      setMessage('Error adding Gaming PC: ' + error.message);
    }
  };

  // Fetch gaming PCs from the API
  const fetchGamingPCs = async () => {
    try {
      const response = await fetch('https://api.gamingforcepcs.com/api/gamingpcs');
      if (!response.ok) {
        throw new Error('Failed to fetch data: ' + response.statusText);
      }
      const data = await response.json();
      setPcs(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Use useEffect to fetch gaming PCs on component mount
  useEffect(() => {
    fetchGamingPCs();
  }, []);

  return (
    <div>
      <Nav />
      <h1 className={homeStyles.title}>Custom PCs</h1>
      <div>
        <h2>Add New Gaming PC</h2>
        <form onSubmit={handleAddPc}>
          <div>
            <label>PC Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>PC Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Gaming PC</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <div>
        <h2>Gaming PC List</h2>
        {error ? (
          <p>Error: {error}</p>
        ) : pcs.length > 0 ? (
          <ul>
            {pcs.map((pc) => (
              <li key={pc._id}>
                <strong>{pc.name}</strong> - ${pc.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Custom;
