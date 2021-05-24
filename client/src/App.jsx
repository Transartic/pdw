/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import PostBidModal from './PostBidModal';
import UserProfile from './UserProfile';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <h1>Pucci</h1>
        <PostBidModal />
        <UserProfile />
      </div>
    );
  }
}
export default App;
