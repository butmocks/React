import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    this.toggle = this.toggle.bind();
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    <div>
      <button onClick={this.toggle}>Toggle</button>
      <div>{this.state.visible && <Clock />}</div>
    </div>;
  }
}

export default App;
