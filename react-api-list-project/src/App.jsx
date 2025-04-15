import React, { useEffect, useState } from 'react';
import ListComponent from './components/ListComponent';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const renderCharacter = (character) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src={character.image} alt={character.name} style={{ width: '50px', borderRadius: '50%' }} />
      <div>
        <strong>{character.name}</strong>
        <p style={{ margin: 0 }}>{character.species} - {character.status}</p>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Rick and Morty Characters</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <ListComponent items={characters} renderItem={renderCharacter} />
      )}
    </div>
  );
};

export default App;