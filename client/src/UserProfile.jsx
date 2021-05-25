/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { FaPaw } from 'react-icons/fa';
// eslint-disable-next-line import/extensions
import { calendar, dummyData } from './helpers.js';
import PostBidModal from './PostBidModal';
import BidPost from './BidPost';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Joseph',
      dogs: 'Bunty and Big Gertha',
      walker: true,
      services: ['dog washing', 'teeth brushing'],
      description: 'This is a bunch of text so that I may test the rendering power of the component and ensure it is being put in the box',
      bids: [{
        username: 'Cody',
        date: '?',
        reqServices: ['acupunture', 'treat'],
        info: 'dkdkdkdkdkdkdkdkdkdkdkdkdkdkd',
        amount: 56,
      },
      {
        username: 'Tish',
        date: '?',
        reqServices: ['acupunture', 'wash'],
        info: 'lalalalalalalalalalalalalalalalala',
        amount: 90,
      }],
    };
    this.updateCalendar = this.updateCalendar.bind(this);
  }

  componentDidMount() {
    calendar();
    this.updateCalendar();
  }

  updateCalendar() {
    if (this.state.walker) {
      //insert axios request here when route is made, update dummyData with response
      var days = document.getElementsByClassName("day");
      for (var i = 0; i < days.length; i++) {
        for (var j = 0; j < dummyData.length; j++) {
          var current = dummyData[j];
          var dataString = dummyData[j].dateTime;
          var stringToDate = new Date(dataString);
      
          const options = { weekday: "short" };
          const dataDay = new Intl.DateTimeFormat("en-US", options).format(stringToDate);
      
          var dataTime = stringToDate.toLocaleTimeString("en-US");

          var services = [];
          var servicesObj = current.services;
          for (var key in servicesObj) {
            if (servicesObj[key] === true) {
              services.push(key);
            }
          }
          var servicesString = services.join(', ');
      
          if (days[i].innerText === dataDay) {
            days[i].insertAdjacentHTML("beforeend", `<div class="calendar-time">${dataTime}</div>
            <div>Dog: ${current.dogName}</div>
            <div>Duration: ${current.duration} min</div>
            <div>Services: ${servicesString}</div>`)
          }
        }
      }
    } else {
      //owner logic 
      //axios request here, will update dummy data with ^ 
      var days = document.getElementsByClassName("day");
      for (var i = 0; i < days.length; i++) {
        for (var j = 0; j < dummyData.length; j++) {
          var current = dummyData[j];
          var dataString = dummyData[j].dateTime;
          var stringToDate = new Date(dataString);
      
          const options = { weekday: "short" };
          const dataDay = new Intl.DateTimeFormat("en-US", options).format(stringToDate);
      
          var dataTime = stringToDate.toLocaleTimeString("en-US");

          var services = [];
          var servicesObj = current.services;
          for (var key in servicesObj) {
            if (servicesObj[key] === true) {
              services.push(key);
            }
          }
          var servicesString = services.join(', ');
      
          if (days[i].innerText === dataDay) {
            days[i].insertAdjacentHTML("beforeend", `<div class="calendar-time">${dataTime}</div>
            <div>Walker: ${current.dogwalkerName}</div>
            <div>Duration: ${current.duration} min</div>
            <div>Services: ${servicesString}</div>`)
          }
        }
      }
    }
  }



  render() {
    let profileInfo;
    if (this.state.walker === false) {
      profileInfo = (<div className="profile-info">
                       <h5>Dogs Name</h5>
                       <div>{this.state.dogs}</div>
                       <h5>About</h5>
                       <p>
                         {this.state.description}
                       </p>
                     </div>);
    } else {
      profileInfo = (<div className="profile-info">
                       <h5>Services</h5>
                       <ul>
                         {
                           this.state.services.map((service, k) => {
                             return <li key={k}>{service}</li>
                           })
                         }
                       </ul>
                       <p>{this.state.description}</p>
                     </div>);
    }
    return (
      <div className="logged-in-profile">
        <div className="landing-container">
          <h1 className="landing-title">
            P U C C I
            <FaPaw />
          </h1>
        </div>

        <div className="profile-container">
          <div className="profile-picture">This is the profile-picture class</div>
          <div className="username">{this.state.username}</div>
          <PostBidModal />
          {profileInfo}
        </div>

        <div className="posts-schedule-walks-container">
          <div className="auction-posts">
            {
              this.state.bids.map((bid, k) => {
                return <BidPost key={k} bid={bid} page={this.state.walker} />
              })
            }
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
