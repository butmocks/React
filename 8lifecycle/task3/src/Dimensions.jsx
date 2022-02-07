import React, { Component } from 'react';

class Dimensions extends Component {
  constructor() {
    super();

    const { innerWidth, innerHeight } = window;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    };
    document.title = `${innerWidth} x ${innerHeight}`;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowChange);
  }

  onWindowChange = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setState({
      width: innerWidth,
      height: innerHeight,
    });

    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    return (
      <div className="dimensions">
        {this.state.width}px - {this.state.height}px
      </div>
    );
  }
}

export default Dimensions;
