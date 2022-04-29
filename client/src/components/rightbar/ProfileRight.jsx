import {Users} from "../../dummyData";
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

        <h4 className="rightbarTitle">Online</h4>

        <div className="rightbarFollowings">
          {
            Users.map((user)=>{
              return(
                <>
                  <div className="rightbarFollowing">
            <img
              src={user.profilePicture}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{user.username.substring(0,7)}</span>
          </div>
                </>
              )
            })
          }
        </div>
      </>
    </>
  );
};

export default ProfileRight;
