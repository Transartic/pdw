import React, { Component } from 'react';
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
        <UserProfile />
      </div>
    );
  }
}
export default App;
