import React from "react";
import "./style.css";

function FriendCard({friend}) {
  console.log(friend);
  return (
    <div className="card">
      <div className="img-container">
        <img alt={friend.name} src={friend.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {friend.name}
          </li>
          <li>
            <strong>Occupation:</strong> {friend.occupation}
          </li>
          <li>
            <strong>Address:</strong> {friend.location}
          </li>
        </ul>
      </div>
      <span className="remove">𝘅</span>
    </div>
  );
}

export default FriendCard;
