import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Comment from './Comment.jsx';

const UserInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/user',
};

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Comment
    user={UserInfo}
    text="Good job!"
    date={new Date('2001-01-01T11:32:19.566Z')}
  />,
  rootElement
);
