import React from 'react';

// const Logout = props => {
//   return <button className="logout btn">Logout</button>;;
// };

// export default Logout;



// input:
// output:

const Logout = ({onLogout}) => {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};

export default Logout;