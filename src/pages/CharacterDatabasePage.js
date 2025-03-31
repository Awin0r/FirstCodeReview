import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CharacterTable from '../components/CharacterTable';

const CharacterDatabasePage = () => {

    const [searchTerm, setSearchTerm] = useState('');

    // Updating search state
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <>
        <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <CharacterTable searchTerm={searchTerm} />
      </>
    );
  };

export default CharacterDatabasePage;