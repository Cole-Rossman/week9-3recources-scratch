import React, { useState, useEffect } from 'react';
import { fetchBunnies } from '../../services/bunnies';

export default function Bunnies() {
  const [bunnies, setBunnies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bunnyData = await fetchBunnies();
        setBunnies(bunnyData);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='bunnies'>
      <h1>Fuzzy Bunny Friends</h1>
      {error && <p>{error}</p>}
      {bunnies.map((bunny) => (
        <p key={bunny.id}>{bunny.name}</p>
      ))}
    </div>
  );
}
