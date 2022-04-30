import React from "react";
import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons";
import { Users } from "../../dummyData";
import "./share.css";

function Share() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={PF+Users[0].profilePicture} alt="" />
          <input
            type="text"
            className="shareInput"
            placeholder="Whats in your mind"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                <PermMedia htmlColor="purple" className="shareicon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                <Label htmlColor="purple" className="shareicon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                <Room htmlColor="purple" className="shareicon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                <EmojiEmotions htmlColor="purple" className="shareicon"/>
                    <span className="shareOptionText">Emoji</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
