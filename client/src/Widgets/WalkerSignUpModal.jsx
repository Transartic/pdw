import React, { Component } from 'react';
import {
  Button, Header, Icon, Modal
} from 'semantic-ui-react';
import WalkerSignUpForm from './WalkerSignUpForm.jsx';

class WalkerSignUpModal extends Component {
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

          <button className="landing-btn" onClick={this.handleOpen}>WALK DOGGOS SIGNUP</button>

          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeIcon
          >
            <Modal.Header>Walker Sign-Up</Modal.Header>
            <Modal.Content>
              <WalkerSignUpForm
                updateToken={this.props.updateToken}
                handleClose={this.handleClose}/>
            </Modal.Content>
          </Modal>
        </div>
    );
}
}

export default WalkerSignUpModal;