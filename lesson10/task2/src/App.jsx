import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <>
        <div className="page">
          <h1 className="title">{`Hello, ${this.state.userData.firstName} ${this.state.userData.lastName}`}</h1>
          <main className="content">
            <ShoppingCart userName={this.state.userData.firstName} />
            <div className="column">
              <Profile
                userData={this.state.userData}
                handleChange={this.handleChange}
              />
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default App;
