import React from 'react';

const UserForm = ({ userData, handleChange }) => {

  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
        onChange={handleChange}
      />
      <input
        value={userData.lastName}
        type="text"
        name="lastName"
        className="user-form__input"
        onChange={handleChange}
      />
    </form>
  );
};

export default UserForm;
