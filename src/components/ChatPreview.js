import { FaRegImage } from "react-icons/fa";
import { RiWifiOffLine } from "react-icons/ri";
import { TbCircleDotFilled } from "react-icons/tb";
import React from 'react'
import '../styles/ChatPreview.css';
import { FaPhoneAlt } from 'react-icons/fa';

export default function ChatPreview(props) {
    return (
        <div className={`ChatPreview FRCS ${props.element.isOpened ? 'currentlyViewing' : props.element.isUnreadMessage ? 'unreadMessage' : ''}`}>
            <div className='userProfile FRCC'>
                <img src={props.element.profile_picture} className='profilePicture icons' />
                {
                    props.element.onCall ? <FaPhoneAlt className="myStatus myStatusIsOnCall" title={props.element.status} /> :
                        props.element.isAvailable ? <TbCircleDotFilled className="myStatus myStatusIsOnline" title={props.element.status} /> :
                            <RiWifiOffLine className="myStatus myStatusIsOffline" title={props.element.status} />
                }
            </div>
            <div className="name_and_latestmessage">
                <p className="FRCS nowrap username">
                    {props.element.name}
                </p>
                <span className='latestMessage FRCS'>
                    <span>
                        {props.element.latestMessageType === 'meta' && <FaRegImage className="latestMessageTypeIsMeta" />}
                    </span>
                    <span>
                        {props.element.latestMessage}
                    </span>
                </span>
            </div>
            <div className='callIcon FRCC'>
                <FaPhoneAlt className="icons" />
            </div>
        </div>
    )
}


// 9842774030

// 9865254030