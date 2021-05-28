import React from 'react';
import ViewBidsModal from './ViewBidsModal.jsx';

const BidPost = ({ post, page, token }) => {
  let profilePost;
  let dateString = post.dateTime;
  const options = { year: "numeric", month: "long", day: "numeric", weekday: "short"};
  let newDate = new Date(dateString).toLocaleDateString(undefined, options);

  if (page === false) {
    var services = Object.keys(post.services);
    profilePost = (
      <div className="post-body">
        <div className="post-date-time">
          <div className="post-date"><b>Date:</b> {newDate}</div>
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
            <p><b>Details:</b> {post.comments}</p>
          </div>
        </div>
        <div className="post-button owner">
          <ViewBidsModal postId={post.id} token={token} bids={post.bids} />
        </div>
      </div>
    );
  } else {
    var services = Object.keys(post.services);
    profilePost = (
      <div className="post-body">
        <div className="post-date-time">
          <div className="post-date"><b>Date:</b> {newDate}</div>
        </div>
        <div className="post-details">
          <div className="post-username"><b>User:</b> {post.userId}</div>
          <div className="post-info">
          Services:
          <ul>
              {
                services.map((ser, k) => {
                  return <li key={k}>{ser}</li>
                })
              }
            </ul>
            <div><b>Duration of walk:</b> {post.duration}</div>
            <p><b>Details:</b> {post.comments}</p>
          </div>
        </div>
        <div className="bid-status">Pending Review</div>
      </div>
    );
  }
  var hide = {"visibility": "hidden"}
  var show = {"visibility": "visible"}
  return (
    <div className="post" style={post.assignedWalker ? hide : show}>
      {profilePost}
    </div>
  );
};

export default BidPost;
