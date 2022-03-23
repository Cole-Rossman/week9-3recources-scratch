import React, { useState, useEffect } from 'react';
import Filter from '../../components/Controls/Filter';
import { fetchCharacters, filterCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');
  const [speciesType, setSpeciesType] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (speciesType === 'All') {
          const characterData = await fetchCharacters();
          setCharacters(characterData);
        } else {
          const filtered = await filterCharacters(speciesType);
          setCharacters(filtered);
        }
      } catch (e) {
        setError(error.message);
      }
    };
    fetchData();
  }, [speciesType]);
  return (
    <div className='character'>
      <Filter speciesType={speciesType} callback={setSpeciesType} /> 
      <h1>Lilo and Stitch characters</h1>
      {error && <p>{error}</p>}
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}
