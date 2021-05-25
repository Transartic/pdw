/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
// eslint-disable-next-line import/extensions
import { calendar } from './helpers.js';
import PostBidModal from './PostBidModal';
import BidPost from './BidPost';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Joseph',
      dogs: 'Bunty and Big Gertha',
      walker: false,
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
  }

  componentDidMount() {
    calendar();
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
        <h1>Pucci</h1>

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
