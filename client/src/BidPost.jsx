import React from 'react';
import ViewBidsModal from './ViewBidsModal.jsx';

const BidPost = ({ bid, page }) => {
  let profileBid;
  if (page === false) {
    profileBid = (
      <div className="post-body">
        <div className="post-date-time">
          <div className="post-date">Date {bid.date}</div>
          <div className="post-time">Time {bid.date}</div>
        </div>
        <div className="post-details">
          {/* <div className="post-username">Username</div> */}
          <div className="post-info">
            <ul>
              {
                bid.reqServices.map((ser, k) => {
                  return <li key={k}>{ser}</li>
                })
              }
            </ul>
            <p>{bid.info}</p>
          </div>
        </div>
        <div className="post-button owner">
          <ViewBidsModal />
        </div>
      </div>
    );
  } else {
    profileBid = (
      <div className="post-body">
        <div className="post-date-time">
          <div className="post-date">Date {bid.date}</div>
          <div className="post-time">Time {bid.date}</div>
        </div>
        <div className="post-details">
          <div className="post-username">{bid.username}</div>
          <div className="post-info">
          <ul>
              {
                bid.reqServices.map((ser, k) => {
                  return <li key={k}>{ser}</li>
                })
              }
            </ul>
            <p>{bid.info}</p>
          </div>
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
