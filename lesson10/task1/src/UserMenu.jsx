import React from 'react';

const UserMenu = ({ userData }) => {
  if (!userData) {
    return null;
  }

  return (
    <header className="header">
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${userData.name}`}</span>
        <img
          alt="User Avatar"
          src={userData.avatar_url}
          className="menu__avatar"
        />
      </div>
    </header>
  );
};

export default UserMenu;
