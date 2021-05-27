import React from 'react';
import ViewBidsModal from './ViewBidsModal.jsx';

const BidPost = ({ post, page }) => {
  let profilePost;
  if (page === false) {
    var services = Object.keys(post.services);
    profilePost = (
      <div className="post-body">
        <div className="post-date-time">
          <div className="post-date">Date {post.dateTime}</div>
          <div className="post-time">Time {post.dateTime}</div>
        </div>
        <div className="post-details">
          {/* <div className="post-username">Username</div> */}
          <div className="post-info">
            <ul>
              {
                services.map((ser, k) => {
                  return <li key={k}>{ser}</li>
                })
              }
            </ul>
            <p>{post.comments}</p>
          </div>
        </div>
        <div className="post-button owner">
          <ViewBidsModal bids={post.bids} />
        </div>
      </div>
    );
  } else {
    var services = Object.keys(post.services);
    profilePost = (
      <div className="post-body">
        <div className="post-date-time">
          <div className="post-date">Date {post.date}</div>
          <div className="post-time">Time {post.date}</div>
        </div>
        <div className="post-details">
          <div className="post-username">{post.user.firstName}</div>
          <div className="post-info">
          <ul>
              {
                services.map((ser, k) => {
                  return <li key={k}>{ser}</li>
                })
              }
            </ul>
            <p>{post.comments}</p>
          </div>
        </div>
        <div className="bid-status">Pending Review</div>
      </div>
    );
  }
  return (
    <div className="post">
      {profilePost}
    </div>
  );
};

export default BidPost;
