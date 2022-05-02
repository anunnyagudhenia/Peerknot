import React from "react";
import "./CloseFriend.css";

function CloseFriend({user}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li>
      <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
      <span className="sideFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
