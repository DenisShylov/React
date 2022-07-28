import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';
import './styles.scss';

const UserInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/user',
};

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Comment author={UserInfo} text="Good job!" date={new Date()} />,
  rootElement
);
