import React from 'react';
import ViewBidsModal from './ViewBidsModal.jsx';

const BidPost = ({ page }) => {
  let profileBid;
  if (page === 'owner') {
    profileBid = (
      <div className="post-body">
        <div className="post-date-time">
          <div className="post-date">Date</div>
          <div className="post-time">Time</div>
        </div>
        <div className="post-details">
          <div className="post-username">Username</div>
          <div className="post-info">Post Info kajhfiouahfiouahdiouahiduhaiwudhiauwhdiuawhdiauhdiuahiwduhaiudhaiuwhdiauwhdiauhwdiuahwdiuahwdiuahwdiuawhiduahiduahwiduahwiduhawiudhaiwudhiauwhdiaudhiauhdiauwhdiauhdiawuhdih</div>
        </div>
        <div className="post-button owner">
          <ViewBidsModal />
        </div>
      </div>
    );
  } else if (page === 'walker') {
    profileBid = (
      <div className="post-body">
        <div className="post-date-time">
          <div className="post-date">Date</div>
          <div className="post-time">Time</div>
        </div>
        <div className="post-details">
          <div className="post-username">Username</div>
          <div className="post-info">Post Info kajhfiouahfiouahdiouahiduhaiwudhiauwhdiuawhdiauhdiuahiwduhaiudhaiuwhdiauwhdiauhwdiuahwdiuahwdiuahwdiuawhiduahiduahwiduahwiduhawiudhaiwudhiauwhdiaudhiauhdiauwhdiauhdiawuhdih</div>
        </div>
        <div className="bid-status">Pending Review</div>
      </div>
    );
  }
  return (
    <div className="post">
      {profileBid}
    </div>
  );
};

export default BidPost;
