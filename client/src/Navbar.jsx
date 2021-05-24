import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav">
      <Link className="home" to="/">
        <h4>Home</h4>
      </Link>
      <Link className="users" to="/UserProfile">
        <h4>User Profile</h4>
      </Link>
      <Link className="auctionhouse" to="/AuctionHouse">
        <h4>Auction House</h4>
      </Link>
      <Link className="dogwalkerProfile" to="/DogwalkerProfile">
        <h4>Dogwalker Profile</h4>
      </Link>

    </div>
  );
}
