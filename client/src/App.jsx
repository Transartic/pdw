import React, { Component } from 'react';
import PostBidModal from './PostBidModal';
// eslint-disable-next-line import/extensions
import UserProfile from './UserProfile.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <h1>Pucci</h1>
        <PostBidModal/>
        <UserProfile />
      </div>
    );
  }
}
export default App;
