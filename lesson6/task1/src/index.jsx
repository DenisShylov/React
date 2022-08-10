import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import GuestGreeting from './GuestGreeting.jsx';
import UserGreeting from './UserGreeting.jsx';
import Greeting from './Greeting.jsx';
import Auth from './Auth.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Auth />, rootElement);
