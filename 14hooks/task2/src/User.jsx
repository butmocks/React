import React, { Component } from "react";

const User = ({ match }) => {
  const [userData, setUserData] = useState(null)
  const { userData } = this.state;
  if (!userData) {
    return null;
  }
  const { name, location, avatar_url } = userData;
  return (
    <div className="user">
      <img src="{avatar_url}" alt="User Avatar" className="user_" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  )
}

class User extends Component {
  
}