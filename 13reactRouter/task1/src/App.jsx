import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Contacts from './Contacts.jsx';
import Products from './Products.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <div className="page">
      <Home />
      <Products />
      <Contacts />
    </div>
  );
};

export default App;
