import React, { Component } from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UsersList extends Component {
  state = {
    filterText: '',
    count: this.props.users.length,
    usersList: this.props.users,
  };

  onChange = (event) => {
    const filteredInputValue = this.props.users.filter((user) =>
      user.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({
      count: filteredInputValue.length,
      filterText: event.target.value,
      usersList: filteredInputValue,
    });
  };
  render() {
    return (
      <>
        <Filter
          filterText={this.state.filterText}
          onChange={this.onChange}
          count={this.state.count}
        />
        <ul className="users">
          {this.state.usersList.map(({ name, age, id }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
