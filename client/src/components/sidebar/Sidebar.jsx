import "./sidebar.css";
import {HelpOutline, RssFeed, WorkOutline, School,Event, Bookmark, Group,Chat} from "@material-ui/icons"
import CloseFriend from "../closeFriends/CloseFriend";
import {Users} from "../../dummyData";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWraper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
