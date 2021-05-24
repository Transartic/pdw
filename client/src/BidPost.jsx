import React from 'react';

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
        <button className="post-button owner" type="submit">View &lsquo;x&lsquo; Bids</button>
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
  } else {
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
        <button className="post-button walker" type="submit">Place a Bid</button>
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
