import React from "react";
import "./rightbar.css";

const ProfileRight = () => {
  return (
    <>
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Greater Noida</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">New Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Role:</span>
            <span className="rightbarInfoValue">Student</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>

        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Manas</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Manas</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Manas</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Manas</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Manas</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Manas</span>
          </div>
        </div>
      </>
    </>
  );
};

export default ProfileRight;
