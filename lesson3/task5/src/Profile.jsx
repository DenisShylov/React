import React from 'react';
import './index.scss';
import moment from 'moment';

const Profile = (userData) => {
  const date = moment(userData.birthDate).format('MMM Do YY');
  return (
    <div className="profile">
      <div className="profile__name">{`${userData.firstName} ${userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${date} in ${userData.birthPlace}`}</div>
    </div>
  );
};

export default Profile;
