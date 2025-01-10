import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav'; // Import Nav.js
import productStyles from '../css/Products.module.css'; // Import CSS Module

function App() {
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  // Fetch data from the backend and sort items by price
  const fetchData = () => {
    fetch('https://api.gamingforcepcs.com/api/gamingpcs')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const sortedItems = [...data.items].sort((a, b) => a.price - b.price);
        setData({ ...data, items: sortedItems });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle form submission to add a new gaming PC
  const handleAddPc = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!name || !price) {
      setMessage('Please provide both name and price');
      return;
    }

    try {
      const payload = { name, price };
      console.log('Sending payload:', payload); // Debugging log

      const response = await fetch('https://api.gamingforcepcs.com/api/gamingpcs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to add gaming PC: ${errorText}`);
      }

      const newPc = await response.json();
      console.log('Response:', newPc); // Debugging log
      setMessage(`New Gaming PC added: ${newPc.name} - $${newPc.price}`);
      setName('');
      setPrice('');

      // Re-fetch data to display the updated list
      fetchData();
    } catch (error) {
      console.error('Error adding Gaming PC:', error.message);
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <Nav />
      <h1 className={productStyles.title}>--</h1>
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
        <h1>Backend Data:</h1>
        {data ? (
          <>
            {/* Render all JSON data */}
            <p>Name: {data.name}</p>
            <p>Price: {data.price}</p>
            <p>Id: {data._id}</p>

            {/* Render sorted items */}
            <h2>Items:</h2>
            <ul>
              {data.items.map((item) => (
                <li key={`${item.id}-${item.name}`}>
                  {item.id} - {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
