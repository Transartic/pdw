import React, { Component } from 'react';
import {
  Button, Header, Icon, Modal
} from 'semantic-ui-react';

import ReviewsForm from './ReviewsForm.jsx';

class DogwalkerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.onCloseModal=this.onCloseModal.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }


  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });


  onCloseModal = () => {
    this.setState({
        active: false
    });
};


  render() {
    return (
    <div className="non-user-dogwalker-profile">
      <div className="nudp-profile-picture">Profile picture</div>
      <div className="nudp-nav">
          <span className="nudp-nav-select">Tier</span>
          <span className="nudp-nav-select">Rating</span>
          <Button onClick={this.handleOpen} className="nudp-nav-select">Leave a review</Button>
         <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeIcon
        >
        <Modal.Header>Leave A Review</Modal.Header>
        <Modal.Content>
          <ReviewsForm/>
         </Modal.Content>
      </Modal>
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