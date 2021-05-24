/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PostBidModal from './PostBidModal';
// eslint-disable-next-line import/extensions
import UserProfile from './UserProfile.jsx';
import Navbar from './Navbar.jsx';
import AuctionHouse from './AuctionHouse.jsx';
import Home from './Home.jsx';
import DogwalkerProfile from './DogwalkerProfile.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/UserProfile">
              <PostBidModal />
              <UserProfile />
            </Route>
            <Route exact path="/AuctionHouse">
              <AuctionHouse />
            </Route>
            <Route exact path="/DogwalkerProfile">
              <DogwalkerProfile />
            </Route>
            <div className="app" />
          </Switch>
        </Router>

      </div>

    );
  }
}
export default App;
