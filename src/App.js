import React from 'react';
import './App.css';
import MyAppBar from './components/AppBar.js'
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <MyAppBar/>
      <Outlet/>
    </>
  );
};

export default App;