import React, { Component } from 'react';
// 1. define component User which would take {age, name}
// and draw it on page
// 2. define component UsersList, which takes users list and draws filter bar
//

const User = ({ name, age }) => {
  return (
    <ul className="users">
      <li className="user">
        <span className="user__name">{name}</span>
        <span className="user__age">{age}</span>
      </li>
    </ul>
  );
};

export default User;
