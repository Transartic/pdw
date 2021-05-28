/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Form, Header, Icon, Checkbox, Modal
} from 'semantic-ui-react';
import { FaPaw } from 'react-icons/fa';
// eslint-disable-next-line import/extensions
import { calendar } from './helpers.js';
import PostBidModal from './PostBidModal';
import BidPost from './BidPost';
import axios from 'axios';
import WalkChecklist from './WalkChecklist';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posts: null,
      modalOpen: false
    };
    this.updateCalendar = this.updateCalendar.bind(this);
    this.getNextWalk = this.getNextWalk.bind(this);
    this.onRecordWalkClick = this.onRecordWalkClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/user', {
      headers: {
        'Authorization': this.props.token
      },
    })
    .then((data) => {
      this.setState({ user: data.data });
      if (data.data.user_type) {
        console.log(data.data.id)
        axios.get(`/api/bid/${data.data.id}`, {
          headers: {
            'Authorization': this.props.token
          },
        })
        .then((data) => {
          console.log(data.data)
          var posts = []
          data.data.forEach((bidPost) => {
            if (bidPost.post) {
              posts.push(bidPost.post)
            }
          })
          console.log(posts)
          this.setState({ posts: posts });
          calendar();
          this.updateCalendar();
          this.getNextWalk();
        })
        .catch(() => {});
      } else {
        axios.get('/api/posts/', {
          headers: {
            'Authorization': this.props.token
          },
        })
        .then((data) => {
          this.setState({ posts: data.data });
          calendar();
          this.updateCalendar();
          this.getNextWalk();
        })
        .catch(() => {});
      }
    })
    .catch(() => {});
  }


  updateCalendar() {
    if (this.state.user.user_type) {
        var data = this.state.posts;
        if (data.length === 0) {
          return;
        }
        var days = document.getElementsByClassName("day");
        for (var i = 0; i < days.length; i++) {
          for (var j = 0; j < data.length; j++) {
            var current = data[j];
            var dataString = data[j].dateTime;
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
    } else {
        var data = this.state.posts;
        if (data.length === 0) {
          return;
        }
        var days = document.getElementsByClassName("day");
        for (var i = 0; i < days.length; i++) {
          for (var j = 0; j < data.length; j++) {
            var current = data[j];
            var dataString = data[j].dateTime;
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
    }
  }

  getNextWalk() {
    if (this.state.user.user_type) {
      if (this.state.posts.length > 0) {
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
      }

    } else {
      if (this.state.posts.length > 0) {
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
    if (!this.state.user || !this.state.posts) {
      return (<div></div>);
    }
    let profileInfo;
    let recordWalk;
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
      recordWalk = <span></span>
    } else {
      let services = Object.keys(this.state.user.services)
      profileInfo = (<div className="profile-info">
                       <h5>Services</h5>
                       <ul>
                         {
                           services.map((service, k) => {
                             return <li key={k}>{service}</li>
                           })
                         }
                       </ul>
                       <p>{this.state.user.certifications}</p>
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
              <img className="profile-picture" src={this.state.user.user_type ? "https://eskipaper.com/images/dog-background-hd-1.jpg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWBG0PlX6HaX3ZtwAi-bLaZwTvKy85xwwb_IzIlAk3eYGiVuzzkLPqFI6zicYi2kcETs&usqp=CAU"}/>
              <div className="username">{this.state.user.username}</div>
              {this.state.user.user_type === false ? <PostBidModal token={this.props.token}/> : auctionButton}
              {profileInfo}
            </div>

            <div className="posts-schedule-walks-container">
              <div className="auction-posts">
                {
                  this.state.posts.map((post, k) => {
                    console.log(post)
                    return <BidPost key={k} post={post} page={this.state.user.user_type} />
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