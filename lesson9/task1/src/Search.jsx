import React, { Component } from 'react';

class Search extends Component {
  state = { value: '' };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      value: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="search__input"
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
