import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networkStatus: window.navigator.onLine,
    };
  }

  componentDidMount() {
    window.addEventListener('offline', this.handleNetworkChange);
    window.addEventListener('online', this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.handleNetworkChange);
    window.removeEventListener('online', this.handleNetworkChange);
  }

  handleNetworkChange = event => {
    this.setState({ networkStatus: event.target.navigator.onLine });
  };

  render() {
    const { networkStatus } = this.state;
    return networkStatus ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}

export default ConnectionStatus;
