import { RiWifiOffLine } from "react-icons/ri";
import { TbCircleDotFilled } from "react-icons/tb";
import React from 'react'
import '../styles/ChatPreview.css';
import { FaPhoneAlt } from 'react-icons/fa';

export default function ChatPreview(props) {
    return (
        <div className={`ChatPreview FRCS ${props.element.isUnreadMessage ? 'unreadMessage' : ''}`}>
            <div className={`userProfile FRCC`}>
                <img src='https://avatars.githubusercontent.com/u/66894285?v=4' className='profilePicture icons' />
                {
                    props.element.onCall ? <FaPhoneAlt className="myStatus myStatusIsOnCall" title={props.element.status} /> :
                        props.element.isAvailable ? <TbCircleDotFilled className="myStatus myStatusIsOnline" title={props.element.status} /> :
                            <RiWifiOffLine className="myStatus myStatusIsOffline" title={props.element.status} />
                }
            </div>
            <div className="name_and_latestmessage">
                <p className="FRCS nowrap">
                    {props.element.name}
                </p>
                <span className='latestMessage'>{props.element.latestMessage}</span>
            </div>
            <div className='callIcon FRCC'>
                <FaPhoneAlt className="icons" />
            </div>
        </div>
    )
}


// 9842774030

// 9865254030