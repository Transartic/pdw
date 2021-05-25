/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
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
    this.state = {
      token: null,
    };
    this.updateToken = this.updateToken.bind(this);
  }

  updateToken(string) {
    this.setState({ token: string });
  }

  render() {
    let page;
    if (!this.state.token) {
      page = (<Home updateToken={this.updateToken} />);
    } else {
      page = (<UserProfile token={this.state.token} />);
    }
    return (
      <div className="navbar">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/UserProfile">
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
