import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    return this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <>
        <button onClick={this.toggle}>toggle</button>
        {this.state.visible && (
          <>
            <Clock location="London" offset={0} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="New York" offset={-5} />
          </>
        )}
      </>
    );
  }
}

export default App;
