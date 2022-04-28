import React from "react";
import "./CloseFriend.css";

function CloseFriend({user}) {
  return (
    <li>
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="sideFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
