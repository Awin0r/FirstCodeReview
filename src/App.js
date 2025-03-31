import React from 'react';
import { Outlet } from 'react-router-dom';
import MyAppBar from './components/MyAppBar.js'

const App = () => {
  return (
    <>
      <MyAppBar/>   
      <Outlet/>
    </>
  );
};

export default App;