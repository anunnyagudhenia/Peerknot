import React from 'react'
import "./message.css"
const Message = ({own}) => {
  return (
    <div className={own ? "message own":"message"}>
        <div className="messageTop">
            <img src=""
            className='messageImg' alt="" />
            <p className='messageText'>Hello this is a message</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
    </div>
  )
}
export default Message;
