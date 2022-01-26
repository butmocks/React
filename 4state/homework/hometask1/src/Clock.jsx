import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    let shift = props.offset * 60;

    super(props);
    this.state = {
      realTime: moment().utcOffset(shift).format('h:mm:ss A'),
    };

    setInterval(() => {
      this.setState({
        realTime: moment().utcOffset(shift).format('h:mm:ss A'),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.realTime}</div>
      </div>
    );
  }
}

export default Clock;
