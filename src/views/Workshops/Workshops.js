import React, { useState, useEffect } from 'react';
import { fetchWorkshops } from '../../services/workshops';

export default function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const workshopData = await fetchWorkshops();
        setWorkshops(workshopData);
      } catch (e) {
        setError(error.message);
      }
    };
    fetchData();
  }, [error]);

  return (
    <div className='workshops'>
      <h1>List of workshops</h1>
      {error && <p>{error}</p>}
      {workshops.map((workshop) => (
        <p key={workshop.id}>{workshop.name}</p>
      ))}
    </div>
  );
}
