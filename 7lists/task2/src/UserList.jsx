import React from 'react';
import User from './User';

const UserList = ({ users }) => {
  return (
    <ul className="users">
      {users.map(user => (
        <User key={user.name} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};

export default UserList;
