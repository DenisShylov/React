import React, { Component } from 'react';
import UserMenu from './UserMenu.jsx';
import UserProfile from './UserProfile.jsx';

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          user: data,
        });
      });
  };

  render() {
    return (
      <div className="page">
        <UserMenu userData={this.state.user} />
        <UserProfile userData={this.state.user} />;
      </div>
    );
  }
}

export default User;
