import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  };
  render() {
    return (
      <div className="colors">
        <div
          style={{
            backgroundColor: RED,
          }}
          onClick={e => this.setBodyColor(RED)}
          className="colors__button"
        />
        <div
          style={{
            backgroundColor: GREEN,
          }}
          onClick={() => this.setBodyColor(GREEN)}
          className="colors__button"
        />
        <div
          style={{
            backgroundColor: BLUE,
          }}
          onClick={() => this.setBodyColor(BLUE)}
          className="colors__button"
        />
      </div>
    );
  }
}

export default Colors;
