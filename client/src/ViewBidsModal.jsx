import React, { Component } from 'react';
import {
  Button, Header, Icon, Modal
} from 'semantic-ui-react';
import ViewBidsForm from './ViewBidsForm.jsx'

class ViewBidsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

      modalOpen: false,
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
        <div className="view-bids-button">

          <Button onClick={this.handleOpen}>View Bids</Button>

          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeIcon>
            <Modal.Header>View Bids</Modal.Header>
            <Modal.Content>
              <ViewBidsForm
              token={this.props.token}
              postId={this.props.postId}
              handleClose={this.handleClose}
              bids={this.props.bids}/>
            </Modal.Content>
          </Modal>
        </div>
    );
}
}

export default ViewBidsModal;
