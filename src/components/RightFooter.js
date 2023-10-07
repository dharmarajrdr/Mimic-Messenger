import { RiAttachment2 } from "react-icons/ri";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import React from 'react'
import '../styles/RightFooter.css'

export default function RightFooter() {
  return (
    <div id="RightFooter" className="FRCC">
      <textarea type='text' placeholder="Write a message..." spellCheck='false' autoComplete="off" />
      <div id="attachment_emoji_send" className="FRCC">
        <RiAttachment2 className="icons" />
        <BsFillEmojiSmileFill className="icons" />
        <FiSend className="icons" />
      </div>
    </div>
  )
}
