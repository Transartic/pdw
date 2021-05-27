import React, { Component } from 'react';
import {
  Button, Header, Icon, Modal
} from 'semantic-ui-react';
import PostBidForm from './PostBidForm.jsx'

class PostBidModal extends Component {
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
        <div className="profile-button-right">

          <Button onClick={this.handleOpen}>Request Walk</Button>

          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeIcon
          >
            <Modal.Header>Request Walk</Modal.Header>
            <Modal.Content>
              <PostBidForm token={this.props.token} handleClose={this.handleClose}/>
            </Modal.Content>
          </Modal>
        </div>
    );
}
}

export default PostBidModal;
