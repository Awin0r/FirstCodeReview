import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CharacterTable from '../components/CharacterTable';

const CharacterDatabasePage = () => {

    // SearchTerm state is passed as a prop to control the value of the search input
    const [searchTerm, setSearchTerm] = useState('');

    //The handleSearchChange function updates the searchTerm state whenever the user types into the input field.
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