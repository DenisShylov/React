import React from 'react';
import Avatar from './Avatar';

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <Avatar avatartUrl={props.user.avatartUrl} name={props.user.name} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;
