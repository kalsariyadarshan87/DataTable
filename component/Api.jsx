import React, { useState, useEffect } from 'react';

export default function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiURL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error);  
        setLoading(false);
      });
  }, []);  

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
