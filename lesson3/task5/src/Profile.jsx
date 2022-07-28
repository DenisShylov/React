import React from 'react';
import './index.scss';

const Profile = (userData) => {
  const age = Math.floor(
    (new Date().getTime() - new Date(userData.birthDate)) /
      (24 * 3600 * 365 * 1000)
  );
  return (
    <div className="profile">
      {`My name is ${userData.firstName} ${userData.lastName}. I'm ${age} years old and I was born in ${userData.birthPlace}`}
    </div>
  );
};

export default Profile;
