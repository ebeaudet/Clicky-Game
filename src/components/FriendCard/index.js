import React from "react";
import "./style.css";

function FriendCard({friend}) {
  console.log(friend);
  return (
    <div className="card">
      <div className="img-container">
        <img alt={friend.name} src={friend.image} />
      </div>
    </div>
  );
}

export default FriendCard;
