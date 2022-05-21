import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import { User1, Users } from "../../dummyData";
import "./profile.css";
import ProfileRight from "../rightbar/ProfileRight";

function Profile() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCove">
              <img
                src={`${PF}post/3.jpg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={`${PF}person/7.jpeg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{User1.username}</h4>
              <span className="profileInfoDesc">Welcome</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <ProfileRight/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
