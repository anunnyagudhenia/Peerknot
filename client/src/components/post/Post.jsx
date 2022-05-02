import "./post.css";
import { useState } from "react";
// import {Users} from "../../dummyData";
import { MoreVert } from "@material-ui/icons";

function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  function likeHandler(){
    if(isLiked===true){
      setLike(like+1)
      setIsLiked(!isLiked)
    }
    else{
      setLike(like-1)
      setIsLiked(!isLiked)
    }
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={PF+post.profilePicture} className="postProfileImg" alt=""/>
            <span className="postUsername">{post.name}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeicon" src="assets/like.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like}</span>
            <img className="likeicon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
