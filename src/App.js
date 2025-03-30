import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterDatabasePage from './pages/CharacterDatabasePage.js';
import CardViewPage from './pages/CardViewPage.js';
import './App.css';
import MyAppBar from './components/AppBar.js'

const App = () => {
  return (
    <Router>
      <MyAppBar/>
      <Routes>
        <Route path="/" element={<CharacterDatabasePage />} />
        <Route path="/cardviewpage" element={<CardViewPage />} />
      </Routes>

    </Router>
  );
};

export default App;