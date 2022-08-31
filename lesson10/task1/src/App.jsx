import React, { Component } from 'react';
import UserMenu from './UserMenu.jsx';
import UserProfile from './UserProfile.jsx';

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          user: data,
        });
      });
  }

  render() {
    return this.state.user ? (
      <div className="page">
        <UserMenu userData={this.state.user} />
        <UserProfile userData={this.state.user} />;
      </div>
    ) : null;
  }
}

export default App;
