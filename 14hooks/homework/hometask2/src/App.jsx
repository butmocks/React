import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <div>
      <div className="time">
        <Clock location="New York" offset={-5} interval={1000} />
        <Clock location="Kyiv" offset={2} interval={1000} />
        <Clock location="London" offset={0} interval={1000} />
      </div>
    </div>
  );
};

export default App;
