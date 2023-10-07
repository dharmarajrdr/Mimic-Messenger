import { SlSettings } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import React from 'react'
import '../styles/Profile.css'

export default function Profile() {
    return (
        <div id='Profile' className='FRCS'>
            <div id="myProfile" className="FRCC">
                <img src='https://avatars.githubusercontent.com/u/66894285?v=4' className='profilePicture icons' />
                <FaPhoneAlt id="myStatus" />
            </div>
            <div id="name_and_status">
                <p className="nowrap">Dharmaraj Rathinavel</p>
                <span>Online</span>
            </div>
            <FaBell className="icons" id="DND" />
            <SlSettings className="icons" id="settings" />
        </div>
    )
}
