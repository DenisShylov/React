import React from 'react';
import Avatar from './Avatar.jsx';

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <Avatar avatartUrl={props.author.avatartUrl} name={props.author.name} />
      <div className="user-info__name">{props.author.name}</div>
    </div>
  );
};

export default UserInfo;
