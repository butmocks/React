import React from 'react';
import './index.scss';
import UsersList from './UsersList';

class App extends React.Component {
  //pageNumber: num
  state = {
    pageNumber: 3,
  };

  prevBtnHandler = () => {
    //
  }

  nextBtnHandler = () => {
    //
  }

  render() {
    const {pageNumber} = this.state;
    const itemsPerPage = 3;

    // page1 = 0, page2 = 3; page3 = 6;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const usersToRender = this.users.slice(startIndex, endIndex)


    return (
      <div>
        <Pagination
        pageNumber={this.state.pageNumber}
        prev={this.prevBtnHGandler}
        next={this.nextBtnHandler}
        usersCount={10}
        itemsPerPage={3}
        />
        <UsersList users={this.users} />
      </div>
    )
  }
}

export default App;

// REACT APPROACH
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic