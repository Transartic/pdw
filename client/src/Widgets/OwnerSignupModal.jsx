import React, { Component } from 'react';
import {
  Button, Header, Icon, Modal
} from 'semantic-ui-react';
import OwnerSignUpForm from './OwnerSignUpForm.jsx';

class OwnerSignUpModal extends Component {
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
        <div>

          <button onClick={this.handleOpen}>Furry Friend Signup</button>
          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeIcon
          >
            <Modal.Header>Furry Friend Sign-Up</Modal.Header>
            <Modal.Content>
              <OwnerSignUpForm
                updateToken={this.props.updateToken}
                handleClose={this.handleClose}/>
            </Modal.Content>
          </Modal>
        </div>
    );
}
}

export default OwnerSignUpModal;
