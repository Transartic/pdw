import React, { Component } from 'react';
import { FaPaw, FaSearch } from 'react-icons/fa';
// import { Button } from 'semantic-ui-react';
import {
  Button, Header, Icon, Modal
} from 'semantic-ui-react';
import axios from 'axios'


import DWBidForm from './DWBidForm.jsx';

class AuctionHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,

      testdata: [
        {
            "id": 5,
            "duration": "90",
            "dateTime": "2021-05-30T12:30:00.000Z",
            "comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Arcu ac tortor dignissim convallis.",
            "services": {
                "accupuncture": true,
                "spa": true,
                "dental": true
            },
            "maxPrice": 30,
            "status": true,
            "assignedWalker": null,
            "createdAt": "2021-05-25T23:48:02.327Z",
            "updatedAt": "2021-05-25T23:48:02.327Z",
            "userId": 1,
            "user": {
                "firstName": "John",
                "dogname": null,
                "address1": "123 Main St."
            },
            "bids": []
        },
        {
            "id": 6,
            "duration": "2 Hour",
            "dateTime": "2021-06-03T16:00:00.000Z",
            "comments": "Bad Dog",
            "services": {
                "dogMassage": false,
                "dogAccupuncture": false,
            },
            "maxPrice": 30,
            "status": true,
            "assignedWalker": null,
            "createdAt": "2021-05-26T15:23:54.124Z",
            "updatedAt": "2021-05-26T15:23:54.124Z",
            "userId": 1,
            "user": {
                "firstName": "John",
                "dogname": null,
                "address1": "123 Main St."
            },
            "bids": []
        },
        {
            "id": 4,
            "duration": "90",
            "dateTime": "2021-05-27T12:30:00.000Z",
            "comments": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Arcu ac tortor dignissim convallis.",
            "services": {
                "accupuncture": true,
                "spa": true,
                "dental": true
            },
            "maxPrice": 30,
            "status": true,
            "assignedWalker": null,
            "createdAt": "2021-05-25T23:47:56.838Z",
            "updatedAt": "2021-05-25T23:47:56.838Z",
            "userId": 1,
            "user": {
                "firstName": "John",
                "dogname": null,
                "address1": "123 Main St."
            },
            "bids": []
        },
        {
            "id": 7,
            "duration": "3 Hour",
            "dateTime": "2021-07-13T18:00:00.000Z",
            "comments": "Good Dog",
            "services": {
                "dogMassage": "dogMassage",
                "dogAccupuncture": "dogAccupuncture"
            },
            "maxPrice": 50,
            "status": true,
            "assignedWalker": null,
            "createdAt": "2021-05-26T15:26:54.585Z",
            "updatedAt": "2021-05-26T15:26:54.585Z",
            "userId": 1,
            "user": {
                "firstName": "John",
                "dogname": null,
                "address1": "123 Main St."
            },
            "bids": []
        }
    ]

    };
    this.handleReset = this.handleReset.bind(this);
    // this.handleDWBidModal = this.handleDWBidModal.bind(this);
    this.onCloseModal=this.onCloseModal.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount(){
    // axios.get('/api/posts/')
    // .then()

  }


  handleReset() {
    location.reload();
  }


  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });


  onCloseModal = () => {
    this.setState({
        active: false
    });
};




  render() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    today = `${mm}/${dd}/${yyyy}`;



    var post = this.state.testdata.map((el, index)=>{

var date = new Date(el.dateTime)
console.log('date', date)
      return(
       <div key={index} className="singlepost">
     Date:
     {date.toString()}
      <br /><br />
      Price Posted By Owner: {`$${el.maxPrice}`}
      <br /><br />
      Walk Duration: {`${el.duration} minutes`}
      <br /><br />
      Dog Owner:
      {Object.entries(el.user).map(([key, value], index) => {
   return(
     <div key={index}>
     {value}
     </div>
   )
})}
      <br /><br />
      Services
      <ul>
{Object.entries(el.services).map(([key, value], index) => {
  if(value === true)
   return(
    <li key={index}>{key}</li>
   )
})}
    </ul>
    <br /><br />
    Comments:
    {el.comments}
      <Button onClick={this.handleOpen}>Place Bid</Button>
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeIcon
        >
        <Modal.Header>Bid</Modal.Header>
        <Modal.Content>
          <DWBidForm handleClose={this.handleClose}/>
        </Modal.Content>
      </Modal>
    </div>
      )
        })
    return (
      <div>

        <div>
          <h1>Pucci</h1>

          <div className="auction-profile-container">
            <FaPaw size={70} />
            <div><h3>Auction House</h3></div>
            <div className="profile-info">Calender</div>
          </div>

          <div className="auction-posts-container">
            <div className="auction-posts">
              <div className="aucpost">
                Date
                <br />
                {' '}
                {today}
              </div>

              <div className="aucpost">
                Filters
                <br />
                {' '}
                <input type="text" placeholder="Search..." />
                {' '}
                <FaSearch />
              </div>
              <div className="aucpost">
                Reset
                <br />
                {' '}
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            </div>

            <div className="allposts">
              <h3>Posts</h3>
              {post}

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AuctionHouse;
