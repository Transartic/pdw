import React, { Component } from 'react';
import { FaPaw, FaSearch } from 'react-icons/fa';
// import { Button } from 'semantic-ui-react';
import {
  Button, Header, Icon, Modal
} from 'semantic-ui-react';
import axios from 'axios'
import { Link } from 'react-router-dom';


import DWBidForm from './DWBidForm.jsx';

class AuctionHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      posts: [],
      userId: 0,

    };
    this.handleReset = this.handleReset.bind(this);
    // this.handleDWBidModal = this.handleDWBidModal.bind(this);
    this.onCloseModal=this.onCloseModal.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    // axios.get('/api/user', {
    //   headers: {
    //     'Authorization': this.props.token
    //   },
    // })
    // .then((data) => {
    //   this.setState({ user: data.data });
    // })
    // .catch(() => {});

    axios.get('/api/posts/all', {
      headers: {
        'Authorization': this.props.token
      },
    })
    .then((data) => {
      this.setState({ posts: data.data });
    })
    .catch(() => {});
    // calendar();
    // this.updateCalendar();
  }


  handleReset() {
    location.reload();
  }

handleOpen(e){

  this.setState({
    userId: e.target.value,
    modalOpen: true
  })
}
  //handleOpen = () => this.setState({ modalOpen: true });

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
//     var output = []
// this.state.testbids.map((onebid) =>{
//   this.state.testdata.map((el)=>{
//     if(el.userId === onebid.user_id){
//       if(output.indexOf(el.user.firstName) === -1){
//         output.push(el.user.firstName, onebid.bid);
//     }
//     }
//   })
// })
// console.log(output)


    var post = this.state.posts.map((el, index)=>{


var date = new Date(el.dateTime)
const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = date.getFullYear();
    date = `${mm}/${dd}/${yyyy}`;
      return(
       <div key={index} className="singlepost">
         <div className='ahDate'>
     Date
        <br/>
     {date}
     </div>
      <br /><br />
      <div className='ah'>
      Price Posted By Owner: {`$${el.maxPrice}`}
      </div>
      <br /><br />
      <div className='ah'>
      Walk Duration: {`${el.duration} minutes`}
      </div>
      <br /><br />
      <div className='ah'>

      Dog Owner
</div>
<div className='ahOwner'>
  <br/>
{Object.entries(el.user).map(([key, value], index) => {

 return(
<div key={index}>

{value}

</div>
   )
})}
</div>
      <br /><br />
      <div className='ah'>
      Services
      </div>
      <ul>
        <div className='ahServices'>
{Object.entries(el.services).map(([key, value], index) => {
  if(value === true)
   return(
    <li key={index}>{key}</li>
   )
})}
</div>
    </ul>

    <br />
    <div className='ahComments'>
    Comments
    <br/>
    {el.comments}
    </div>
    <br /><br />
    <div className='ahBidButton'>
    <Button value={el.userId} onClick={this.handleOpen}>Place Bid</Button>
    </div>
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeIcon
        >
        <Modal.Header>Bid</Modal.Header>
        <Modal.Content>
          <DWBidForm userId={this.state.userId} postId={el.id} token={this.props.token} handleClose={this.handleClose}/>
        </Modal.Content>
      </Modal>
    </div>
      )
    //})
        })
    return (
      <div className="logged-in-profile">

        <div>
        <div className="landing-container">
          <h1 className="landing-title">
            P U C C I
            <FaPaw />
          </h1>
        </div>

          <div className="auction-profile-container">
            <FaPaw size={70} />
            <div className="landing-title">
              <h2>Auction House</h2>
              </div>
              <Link className="users" to="/UserProfile">
              <Button>Back To Profile</Button>
      </Link>

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
