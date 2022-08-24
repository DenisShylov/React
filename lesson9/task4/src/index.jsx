import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const rootElem = document.querySelector('#root');

const users = [
  { name: 'Tom', age: 18, id: 1 },
  { name: 'John', age: 20, id: 2 },
  { name: 'Dan', age: 22, id: 3 },
];
ReactDOM.render(<UsersList users={users} />, rootElem);
