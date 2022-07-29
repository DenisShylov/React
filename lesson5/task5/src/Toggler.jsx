import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: 'Off',
    };
  }

  ChangeStatus() {
    if (this.state.toggler === 'Off') {
      this.setState({
        toggler: 'On',
      });
    } else
      this.setState({
        toggler: 'Off',
      });
  }
  render() {
    return (
      <div className="toggler" onClick={() => this.ChangeStatus()}>
        {this.state.toggler}
      </div>
    );
  }
}

export default Toggler;
