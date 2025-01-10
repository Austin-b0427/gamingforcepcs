import { useEffect, useState } from "react";
import axios from "axios";
import accessoriesStyles from '../css/Accessories.module.css';  // Import the CSS Module
import Nav from '../Components/Nav';

function Accessories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.gamingforcepcs.com/api/gamingpcs")
      .then((response) => {
        setData(response.data); // Assuming the API response contains the array of items
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Nav />
      <h1 className={accessoriesStyles.title}>Accessories</h1>
      <div className={accessoriesStyles.container}>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item._id} className={accessoriesStyles.card}>
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <small>ID: {item._id}</small>
            </div>
          ))
        ) : (
          <p>Loading accessories...</p>
        )}
      </div>
    </div>
  );
}

export default Accessories;
