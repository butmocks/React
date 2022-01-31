import React, { Component } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greeting = ({ isLoggedIn }) => (isLoggedIn ? <UserGreeting /> : <GuestGreeting />);

// const Greeting = ({isLoggedIn}) => {
//   if (props.isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// };

export default Greeting;
