import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// algo
// 1. show Login by default
// 2. after login show Spinner for 2 secs
// 3. after 2 secs - show logout
// 4. after Logout click - show login

class Auth extends React.Component {
  // constructor(props) {

  //   this.state = {
  //     isLoggedIn: false,
  //     isProcessing: false
  //   }
  // }

  handleLoginClick = () => {
    // input: obj
    // output: undef
    this.setState({
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.handleLogoutClick} />;
    }
    return <Login onLogin={this.handleLoginClick} />;
  }
}
export default Auth;