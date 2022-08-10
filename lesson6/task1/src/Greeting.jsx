import React from 'react';
import GuestGreeting from './GuestGreeting.jsx';
import UserGreeting from './UserGreeting.jsx';

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
