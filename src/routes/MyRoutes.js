import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterDatabasePage from '../pages/CharacterDatabasePage.js';
import CardViewPage from '../pages/CardViewPage.js';
import App from '../App.js';
import PathConstants from './PathConstants.js';
import WelcomePage from '../pages/WelcomePage.js'

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={PathConstants.HOME} element={<App/>}>
            <Route index element={<WelcomePage />} />
            <Route path={PathConstants.CHARACTERDATABASE} element={<CharacterDatabasePage />} />
            <Route path={PathConstants.CARDVIEW} element={<CardViewPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;