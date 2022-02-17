import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dimensions from './Dimensions.jsx';

const Demo = () => {
  return (
    <div>
      <div>
        <button className="btn" onClick={this.show}>
          Show
        </button>

        <button className="btn" onClick={this.hide}>
          Hide
        </button>
      </div>
      {isVisible && <Dimensions />}
    </div>
  );
};

export default Demo;
