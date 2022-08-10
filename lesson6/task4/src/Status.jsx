import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.isOnline,
    };
  }

  onClick = () => {
    this.setState({
      status: true,
    });
  };
  render() {
    return (
      <div className="status">
        {this.state.status ? <Online /> : <Offline onClick={this.onClick} />}
      </div>
    );
  }
}

export default Status;
