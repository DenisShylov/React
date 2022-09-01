import React from 'react';
import UserForm from './UserForm';

const Profile = ({ userData, handleChange }) => {
  return <UserForm userData={userData} handleChange={handleChange} />;
};

export default Profile;
