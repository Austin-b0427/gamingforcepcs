import React, { useEffect, useState } from 'react';
import loginStyles from '../css/Login.module.css'; // Import the CSS Module
import Nav from '../Components/Nav';

function Login() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simple fetch test script
    const testFetch = async () => {
      try {
        const response = await fetch('https://api.gamingforcepcs.com/api/gamingpcs'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const fetchedData = await response.json();
        setData(fetchedData); // Set the fetched data to state
      } catch (error) {
        setError('Error during fetch test: ' + error.message); // Set error message to state
      }
    };

    testFetch(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <Nav />
      <h1 className={loginStyles.title}>Login</h1>
      <div>
        {error ? (
          <div>
            <p>Error:</p>
            <p>{error}</p>
          </div>
        ) : data ? (
          <div>
            <h2>Fetched Gaming PCs:</h2>
            <ul>
              {data.map(pc => (
                <li key={pc._id}>
                  <strong>{pc.name}</strong> - ${pc.price}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Login;
