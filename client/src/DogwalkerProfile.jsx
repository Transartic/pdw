import React, { Component } from 'react';

class DogwalkerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div className="non-user-dogwalker-profile">
      <div className="nudp-profile-picture">Profile picture</div>
      <div className="nudp-nav">
          <span className="nudp-nav-select">Tier</span>
          <span className="nudp-nav-select">Rating</span>
          <span className="nudp-nav-select">Leave a review</span>
      </div>
      <div className="nudp-meta-data">
          <span className="nudp-specifics">User specifics (name, description, location, qualifications)</span>
          <span className="nudp-reviews">Reviews will go here</span>
      </div>
    </div>
    );
  }
}

export default DogwalkerProfile;