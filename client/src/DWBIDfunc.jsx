import React, { Component } from 'react';
import {
  Button, Header, Icon, Modal,
} from 'semantic-ui-react';
import DWBidForm from './DWBidForm.jsx';
class DWBIDfunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,

    };
    this.onCloseModal=this.onCloseModal.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
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

    return (
      <div className='ahBidButton'>
    <Button onClick={this.handleOpen}>Place Bid</Button>


      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeIcon
        >
        <Modal.Header>Bid</Modal.Header>
        <Modal.Content>
          <DWBidForm
           userId={this.props.propductId} token={this.props.token}
          handleClose={this.handleClose}/>
        </Modal.Content>
      </Modal>
      </div>


    );
  }
}

export default DWBIDfunc;
