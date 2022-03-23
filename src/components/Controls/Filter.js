import React from 'react';

export default function Filter({ speciesType, callback }) {
  return (
    <select value={speciesType} className='filter' onChange={(e) => callback(e.target.value)} >
      <option value="All">All</option>
      <option value="Human">Human</option>
      <option value="Alien">Alien</option>
    </select>
  );
}



