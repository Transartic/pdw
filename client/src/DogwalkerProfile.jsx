import React, { Component } from 'react';
import {
  Button, Header, Icon, Modal
} from 'semantic-ui-react';

import ReviewsForm from './ReviewsForm.jsx';

class DogwalkerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
            "id": 1,
            "reviewer_id": 11,
            "reviewee_id": 2,
            "rating": 3,
            "review": "this person is a good dogwalker",
            "recommend": true,
            "createdAt": "2021-05-25T20:05:32.142Z",
            "updatedAt": "2021-05-25T20:05:32.142Z",
            "reviewer": {
                "first_name": "John",
                "last_name": "Jane"
            }
           },
           {
               "id": 2,
               "reviewer_id": 11,
               "reviewee_id": 2,
               "rating": 3,
               "review": "i like this dogwalker",
               "recommend": true,
               "createdAt": "2021-05-25T20:07:36.474Z",
               "updatedAt": "2021-05-25T20:07:36.474Z",
               "reviewer": {
                   "first_name": "Frank",
                   "last_name": "Smith"
               }
           }
       ]
    };
    this.onCloseModal=this.onCloseModal.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.getReviews = this.getReviews.bind(this)
  }


  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });


  onCloseModal = () => {
    this.setState({
        active: false
    });
};

  getReviews() {
    //axios request to /api/reviews/:userid when route ready

    let reviews = this.state.reviews;
    let div = document.getElementsByClassName("nudp-reviews");
    for (let i = 0; i < reviews.length; i++) {
      let current = reviews[i];

      if (current.recommend) {
        var recommend = 'yes';
      } else {
        recommend = 'no';
      }

      let dateString = current.createdAt;
      const options = { year: "numeric", month: "long", day: "numeric"};
      let newDate = new Date(dateString).toLocaleDateString(undefined, options);

      div[0].insertAdjacentHTML("beforeend", `<div class="dogwalker-review-name">${current.reviewer.first_name} ${current.reviewer.last_name}</div>
      <div class="dogwalker-review-date">Created on: ${newDate}</div>
      <div class="dogwalker-review-review">"${current.review}"</div>
      <div class="dogwalker-review-recs-ratings">I recommend this dogwalker: ${recommend}  |  Rating: ${current.rating}/5</div>`)
    }
  }

  componentDidMount() {
    this.getReviews();
  }


  render() {
    return (
    <div className="non-user-dogwalker-profile">
      <div className="nudp-profile-picture">Profile picture</div>
      <div className="nudp-nav">
          <span className="nudp-nav-select">Tier</span>
          <span className="nudp-nav-select">Rating</span>
          <Button onClick={this.handleOpen} className="nudp-nav-select">Leave a review</Button>
          <div className='dimmer'>
         <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeIcon
        >
        <Modal.Header>Leave A Review</Modal.Header>

        <Modal.Content >
          <ReviewsForm/>
         </Modal.Content>

      </Modal>
      </div>
      </div>
      <div className="nudp-meta-data">
          <span className="nudp-specifics">User specifics (name, description, location, qualifications)</span>
          <span className="nudp-reviews">Reviews</span>
      </div>
    </div>
    );
  }
}

export default DogwalkerProfile;