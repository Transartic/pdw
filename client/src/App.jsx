/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
    return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            {!this.state.token ? <Home updateToken={this.updateToken} /> : <Redirect to="/UserProfile" />}
          </Route>
          <Route exact path="/UserProfile">
            {!this.state.token ? <Redirect to="/" /> : <UserProfile token={this.state.token} />}
          </Route>
          <Route exact path="/AuctionHouse">
            {!this.state.token ? <Redirect to="/" /> : <AuctionHouse token={this.state.token}/>}
          </Route>
          <Route exact path="/DogwalkerProfile">
            <DogwalkerProfile />
          </Route>
        </Switch>
      </Router>
    </div>

    );
  }
}
export default App;
