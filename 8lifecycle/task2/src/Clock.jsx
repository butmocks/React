import React from 'react';

class Clock extends Component {
  constructor() {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  ComponentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString}</div>;
  }
}

export default Clock;
