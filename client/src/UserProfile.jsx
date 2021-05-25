/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
// eslint-disable-next-line import/extensions
import { calendar, dummyData } from './helpers.js';
import PostBidModal from './PostBidModal';
import BidPost from './BidPost';

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {};
    this.updateCalendar = this.updateCalendar.bind(this);
  }

  componentDidMount() {
    calendar();
    this.updateCalendar();
  }

  updateCalendar() {
    var days = document.getElementsByClassName("day");
    for (var i = 0; i < days.length; i++) {
      for (var j = 0; j < dummyData.length; j++) {
        var dataString = dummyData[j].dateTime;
        var stringToDate = new Date(dataString);
    
        const options = { weekday: "short" };
        const dataDay = new Intl.DateTimeFormat("en-US", options).format(stringToDate);
    
        var dataTime = stringToDate.toLocaleTimeString("en-US");
    
        if (days[i].innerText === dataDay) {
          days[i].insertAdjacentHTML("beforeend", `<div>${dataTime}</div>`)
        }
      }
    }

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
            <BidPost page="owner" />
            <BidPost page="walker" />
            <BidPost page="owner" />
            <BidPost page="walker" />
            <BidPost page="owner" />
            <BidPost page="walker" />
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
