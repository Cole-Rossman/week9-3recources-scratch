import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';


export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterData = await fetchCharacters();
        setCharacters(characterData);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='character'>
      <h1>Lilo and Stitch characters</h1>
      {error && <p>{error}</p>}
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}
