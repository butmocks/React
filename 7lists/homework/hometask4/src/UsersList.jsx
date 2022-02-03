import React, { Component } from "react";
import User from './User';
import Pagination from './Pagination';


class UsersList extends Component {
  render() {
    return (
      <div>
        <Pagination />
        <ul className="users">
          {this.props.users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
};

export default UsersList;
