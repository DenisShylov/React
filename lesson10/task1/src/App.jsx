import React, { Component } from 'react';
import UserMenu from './UserMenu.jsx';
import UserProfile from './UserProfile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then((response) => response.json())
      .then((userData) => {
        this.setState({
          userData,
        });
      });
  }

  render() {
    return this.state.userData ? (
      <div className="page">
        <UserMenu userData={this.state.userData} />
        <UserProfile userData={this.state.userData} />;
      </div>
    ) : null;
  }
}

export default App;
