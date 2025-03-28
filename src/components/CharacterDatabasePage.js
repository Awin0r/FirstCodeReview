import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import CharacterTable from './CharacterTable';

const CharacterDatabasePage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Actualización del estado de la búsqueda
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
        <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <CharacterTable searchTerm={searchTerm} />
      </div>
    );
  };

export default CharacterDatabasePage;