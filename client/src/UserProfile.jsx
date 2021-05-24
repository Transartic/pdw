/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
// eslint-disable-next-line import/extensions
import { calendar } from './helpers.js';
import PostBidModal from './PostBidModal';

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    calendar();
  }

  render() {
    return (
      <div className="logged-in-profile">
        <h1>Pucci</h1>

        <div className="profile-container">
          <div className="profile-picture">This is the profile-picture class</div>
          <div className="username">Thie is username class</div>
          <PostBidModal />
          <div className="profile-info">This is profile-info class</div>
        </div>

        <div className="posts-schedule-walks-container">
          <div className="auction-posts">
            <div className="post">This is the post class</div>
            <div className="post">This is the post class</div>
            <div className="post">This is the post class</div>
          </div>

          <div className="schedule">
            This is the schedule class
            <div id="calendar" />
          </div>

          <div className="walks-container">
            <div className="next-walk">This is the next-walk class</div>
            <div className="checklist">This is the checklist class</div>
            <div className="previous-walk">This is the previous-walk class</div>
          </div>
        </div>

        <div className="area-map">This is the area-map class</div>
      </div>
    );
  }
}

export default UserProfile;
