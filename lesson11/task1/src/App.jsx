import React, { Component } from 'react';
import Numbers from './Numbers.jsx';
import EvenNumber from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

class App extends Component {
  state = {
    title: 'Some Numbers',
    numbers: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        numbers: this.state.numbers + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <EvenNumber title="Even number" number={this.state.numbers} />
        <Numbers title="All number" number={this.state.numbers} />
        <OddNumbers title="Odd number" number={this.state.numbers} />
      </div>
    );
  }
}

export default App;
