/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { FaPaw } from 'react-icons/fa';
import background from '../dist/video/background.mp4';
import OwnerSignUpModal from './Widgets/OwnerSignupModal.jsx';
import UserLoginModal from './Widgets/UserLoginModal.jsx';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="landing-page">
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '120%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
        >
          <source src={background} type="video/mp4" />
        </video>
        <div className="landing-container">
          <h1 className="landing-title">
            P U C C I
            <FaPaw />
          </h1>
          <h2 className="landing-sub-title">Where LA walks their best friend</h2>
          <div className="landing-sign-in-container">
            <OwnerSignUpModal />
            <UserLoginModal />
          </div>

        </div>

      </div>
    );
  }
}
export default Home;
