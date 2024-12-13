import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav'; // Import Nav.js
import productStyles from '../css/Products.module.css'; // import Styles

function App() {
  const [data, setData] = useState(null);

  // Connect to backend, set variable to output and sort
  useEffect(() => {
    fetch('http://73.83.92.175:5000/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Sort items by price (low to high) before setting state
        const sortedItems = [...data.items].sort((a, b) => a.price - b.price);
        setData({ ...data, items: sortedItems });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Nav />
      <h1 className={productStyles.title}>Gaming PCs</h1>
      <div>
        <h1>Backend Data:</h1>
        {data ? (
          <>
            {/* Render all JSON data */}
            <p>Message: {data.mssg}</p>
            <p>User ID: {data.user.id}</p>
            <p>User Name: {data.user.name}</p>
            <p>User Email: {data.user.email}</p>
            <p>User Authentication: {data.isAuthenticated ? 'Yes' : 'No'}</p>
            <p>Timestamp: {new Date(data.timestamp).toLocaleString()}</p>

            {/* Render sorted items */}
            <h2>Items:</h2>
            <ul>
              {data.items.map(item => (
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
