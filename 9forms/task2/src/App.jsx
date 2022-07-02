// import React from 'react';
import UserForm from './UserForm.jsx';
import React, { Component } from 'react';
class App extends Component {
  createUser = userData => {
    console.log(userData);
  };
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
