import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.changeOnline);
    window.addEventListener('offline', this.changeOfline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.changeOnline);
    window.removeEventListener('offline', this.changeOfline);
  }
  changeOnline = () => {
    return this.setState({
      status: 'online',
    });
  };

  changeOfline = () => {
    return this.setState({
      status: 'offline',
    });
  };

  render() {
    if (this.state.status === 'online') {
      return <div className="status">{this.state.status}</div>;
    } else if (this.state.status === 'offline') {
      return <div className="status status_offline">{this.state.status}</div>;
    }
  }
}

export default ConnectionStatus;
