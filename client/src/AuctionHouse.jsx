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

    };
    this.handleReset = this.handleReset.bind(this);
    // this.handleDWBidModal = this.handleDWBidModal.bind(this);
    this.onCloseModal=this.onCloseModal.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount(){

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

    var oneBid =  <div className="singlepost">
     Date:
      <br />
      Time:
      <br />
      Price Posted By Owner:
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
      </ul>
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
              {oneBid}
              {oneBid}
              {oneBid}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AuctionHouse;
