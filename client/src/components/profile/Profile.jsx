import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCove">
              <img
                src="assets/person/11.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/person/7.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Jayesh</h4>
              <span className="profileInfoDesc">Welcome</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
