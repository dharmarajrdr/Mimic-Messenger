import { MdCall } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import React from 'react'
import '../styles/ChatGroupCall.css'

export default function ChatGroupCall() {
  return (
    <div id="ChatGroupCall" className="FRCC">
      <div className="FRCC" id="activeTabAmongChatGroupCall">
        <BsFillChatRightDotsFill className="icons" />
        <span>Chats</span>
      </div>
      <div className="FRCC">
        <MdGroups2 className="icons" />
        <span>Groups</span>
      </div>
      <div className="FRCC">
        <MdCall className="icons" />
        <span>Calls</span>
      </div>
    </div>
  )
}
