import React, { Component } from 'react';
import PostBidModal from './PostBidModal';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Pucci</h1>
        <PostBidModal/>
      </div>
    );
  }
}
export default App;
