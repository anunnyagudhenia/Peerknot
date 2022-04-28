import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const HomeRight = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img src="assets/gift.png" className="birthdayImg" alt="" />
        <span className="birthdayText">
          <b>Pola Foster </b> and <b>3 other friends</b> have a birthday today
        </span>
      </div>
      <img src="assets/ad.png" className="rightbarAd" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );
};

export default HomeRight;
