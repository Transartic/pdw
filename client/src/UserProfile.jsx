/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Link, Route, Router, Switch, HashRouter } from 'react-router-dom';
import {
  Button, Form, Header, Icon, Checkbox, Modal
} from 'semantic-ui-react';
import { FaPaw } from 'react-icons/fa';
// eslint-disable-next-line import/extensions
import { calendar, dummyData } from './helpers.js';
import PostBidModal from './PostBidModal';
import BidPost from './BidPost';
import axios from 'axios';
import WalkChecklist from './WalkChecklist';

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
      posts: []
    };
    this.updateCalendar = this.updateCalendar.bind(this);
    this.getNextWalk = this.getNextWalk.bind(this);
    this.onRecordWalkClick = this.onRecordWalkClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    calendar();
    this.updateCalendar();
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts !== this.state.posts) {
      this.getNextWalk();
    }
    
  }

  updateCalendar() {
    if (this.state.walker) {
      // axios.get('/api/posts', {
      //   headers: {
      //     'Authorization': this.props.token
      //   }
      // })
      // .then((response) => {
        this.setState({
          posts: dummyData
        })
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
      //})

    } else {
      
      // axios.get('/api/posts', {
      //   headers: {
      //     'Authorization': this.props.token
      //   }
      // })
      // .then((response) => {
        this.setState({
          posts: dummyData
        })
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
      //})

    }
  }

  getNextWalk() { 
    if (this.state.walker) {
      let walks = this.state.posts;

      walks.sort(function(a,b) {
        return new Date(b.dateTime) - new Date(a.dateTime);
      })
  
      let nextWalk = walks.pop();
  
      let dataString = nextWalk.dateTime;
      const options = { year: "numeric", month: "long", day: "numeric", weekday: "short"};
      let newDate = new Date(dataString).toLocaleDateString(undefined, options);
      
      let services = Object.keys(nextWalk.services);
      services = services.join(', ');
  
      let div = document.getElementsByClassName("next-walk");
      div[0].insertAdjacentHTML("beforeend", `<div>${newDate}</div>
      <div>Duration: ${nextWalk.duration}</div>
      <div>Services: ${services}</div>
      <div>Owner: ${nextWalk.user.firstName}</div>
      <div>Comments: ${nextWalk.comments}</div>
      <div>Address: ${nextWalk.user.address1}</div>`)

    } else {
      let walks = this.state.posts;

      walks.sort(function(a,b) {
        return new Date(b.dateTime) - new Date(a.dateTime);
      })
  
      let nextWalk = walks.pop();
  
      let dataString = nextWalk.dateTime;
      const options = { year: "numeric", month: "long", day: "numeric", weekday: "short"};
      let newDate = new Date(dataString).toLocaleDateString(undefined, options);
      
      let services = Object.keys(nextWalk.services);
      services = services.join(', ');
  
      let div = document.getElementsByClassName("next-walk");
      div[0].insertAdjacentHTML("beforeend", `<div>${newDate}</div>
      <div>Duration: ${nextWalk.duration}</div>
      <div>Services: ${services}</div>
      <div>Walker: ${nextWalk.assignedWalker}</div>
      <div>Comments: ${nextWalk.comments}</div>
      <div>Price: $${nextWalk.maxPrice}</div>`)

    }

  }

  onRecordWalkClick() {
    this.setState({
      modalOpen: true
    })
  }

  handleClose = () => this.setState({ modalOpen: false });

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  render() {
    let profileInfo;
    let recordWalk;
    if (this.state.walker === false) {
      profileInfo = (<div className="profile-info">
                       <h5>Dogs Name</h5>
                       <div>{this.state.dogs}</div>
                       <h5>About</h5>
                       <p>
                         {this.state.description}
                       </p>
                     </div>);
      recordWalk = <span></span>
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
      recordWalk = <button onClick={this.onRecordWalkClick}>Record Walk</button>
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
              <div className="username">{this.state.username}</div>
              {this.state.walker === false ? <PostBidModal /> : auctionButton}
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
                Schedule
                <div id="calendar" />
              </div>

              <div className="walks-container">
                <div className="next-walk">Next Walk</div>
                {recordWalk}
                <Modal 
                  open={this.state.modalOpen}
                  onClose={this.handleClose}>
                    <Modal.Header>Walk Checklist</Modal.Header>
                    <Modal.Content>
                      <WalkChecklist onClose={this.handleClose}/>
                    </Modal.Content>
                  </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
