import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


const User = () => {
  const [userData, setUserData] = useState(null);
const {userId} = useParams()
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      })
      .then(userData => {
        setUserData(userData);
      });
  }, []);

  if (!userData) {
    return null;
  }
  const { name, location, name } = userData;
  return (
    <div className="user">
      <img src="{avatar_url}" alt="User Avatar" className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
// class User extends Component {}