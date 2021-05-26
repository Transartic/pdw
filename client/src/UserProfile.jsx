/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { FaPaw } from 'react-icons/fa';
// eslint-disable-next-line import/extensions
import { calendar } from './helpers.js';
import PostBidModal from './PostBidModal';
import BidPost from './BidPost';
import axios from 'axios';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posts: null
    };
    this.updateCalendar = this.updateCalendar.bind(this);
  }

  componentDidMount() {
    axios.get('/api/user', {
      headers: {
        'Authorization': this.props.token
      },
    })
    .then((data) => {
      console.log(data.data.id);
      this.setState({ user: data.data });
    })
    .catch(() => {});

    axios.get('/api/posts/', {
      headers: {
        'Authorization': this.props.token
      },
    })
    .then((data) => {
      console.log(data);
      this.setState({ posts: data.data });
    })
    .catch(() => {});
    // calendar();
    // this.updateCalendar();
  }

  updateCalendar() {
    if (this.state.walker) {
      axios.get('/api/posts', {
        headers: {
          'Authorization': this.props.token
        }
      })
      .then((response) => {
        var days = document.getElementsByClassName("day");
        for (var i = 0; i < days.length; i++) {
          for (var j = 0; j < response.length; j++) {
            var current = response[j];
            var dataString = response[j].dateTime;
            var stringToDate = new Date(dataString);

            const options = { weekday: "short" };
            const dataDay = new Intl.DateTimeFormat("en-US", options).format(stringToDate);

            var dataTime = stringToDate.toLocaleTimeString("en-US");

            var services = [];
            var servicesObj = current.services;
            for (var key in servicesObj) {
              if (servicesObj[key]) {
                services.push(key);
              }
            }
            var servicesString = services.join(', ');

            if (days[i].innerText === dataDay) {
              days[i].insertAdjacentHTML("beforeend", `<div class="calendar-time">${dataTime}</div>
              <div>Name: ${current.user.firstName}</div>
              <div>Duration: ${current.duration} </div>
              <div>Services: ${servicesString}</div>`)
            }
          }
        }
      })

    } else {

      axios.get('/api/posts', {
        headers: {
          'Authorization': this.props.token
        }
      })
      .then((response) => {
        var days = document.getElementsByClassName("day");
        for (var i = 0; i < days.length; i++) {
          for (var j = 0; j < response.length; j++) {
            var current = response[j];
            var dataString = response[j].dateTime;
            var stringToDate = new Date(dataString);

            const options = { weekday: "short" };
            const dataDay = new Intl.DateTimeFormat("en-US", options).format(stringToDate);

            var dataTime = stringToDate.toLocaleTimeString("en-US");

            var services = [];
            var servicesObj = current.services;
            for (var key in servicesObj) {
              if (servicesObj[key]) {
                services.push(key);
              }
            }
            var servicesString = services.join(', ');

            if (days[i].innerText === dataDay) {
              days[i].insertAdjacentHTML("beforeend", `<div class="calendar-time">${dataTime}</div>
              <div>Walker: ${current.assignedWalker}</div>
              <div>Duration: ${current.duration} </div>
              <div>Services: ${servicesString}</div>`)
            }
          }
        }
      })

    }
  }


  render() {
    if (!this.state.user || !this.state.posts) {
      return (<div></div>);
    }
    let profileInfo;
    if (this.state.user.user_type === false) {
      profileInfo = (<div className="profile-info">
                       <h5>Dogs Name</h5>
                       <div>{this.state.user.dog_name}</div>
                       <h5>About</h5>
                       <p>
                         {this.state.user.city}
                         {this.state.user.state}
                         {this.state.user.descriptions}
                       </p>
                     </div>);
    } else {
      profileInfo = (<div className="profile-info">
                       <h5>Services</h5>
                       <ul>
                         {
                           this.state.user.services.map((service, k) => {
                             return <li key={k}>{service}</li>
                           })
                         }
                       </ul>
                       <p>{this.state.user.certifications}</p>
                     </div>);
    }
    const auctionButton = (<div className="profile-button-right">
                             <Link className="auctionhouse" to="/AuctionHouse">
                              <Button>Auction House</Button>
                             </Link>
                            </div>);
    return (
      <div className="logged-in-profile">
        <div className="landing-container">
          <h1 className="landing-title">
            P U C C I
            <FaPaw />
          </h1>
        </div>

        <div className="page-container">

          <div className="top-container">
            <div className="profile-container">
              <div className="profile-picture">This is the profile-picture class</div>
              <div className="username">{this.state.user.username}</div>
              {this.state.user.user_type === false ? <PostBidModal /> : auctionButton}
              {profileInfo}
            </div>

            <div className="posts-schedule-walks-container">
              <div className="auction-posts">
                {/* {
                  this.state.bids.map((bid, k) => {
                    return <BidPost key={k} bid={bid} page={this.state.walker} />
                  })
                } */}
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
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
