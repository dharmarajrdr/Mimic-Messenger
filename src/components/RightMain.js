import { BiCheckDouble } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import React from 'react'
import '../styles/RightMain.css';
import { TbCircleDotFilled } from 'react-icons/tb';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiWifiOffLine } from 'react-icons/ri';

export default function RightMain() {
  const messages = [
    {
      'id': 1,
      'message': `We ewiucne cwue quwibdqw iuqwbwq duwqd wqidubd wquib nindc.We ewiucne cwue quwibdqw iuqwbwq duwqd wqidubd wquib nindc We ewiucne cwue quwibdqw iuqwbwq duwqd wqidubd wquib nindc We ewiucne cwue quwibdqw iuqwbwq duwqd wqidubd wquib nindc We ewiucne cwue quwibdqw iuqwbwq duwqd wqidubd wquib nindc. We ewiucne cwue quwibdqw iuqwbwq duwqd wqidubd wquib nindc We ewiucne cwue quwibdqw iuqwbwq duwqd wqidubd wquib nindc We ewiucne cwue quwibdqw iuqwbwq duwqd wqidubd wquib nindc We ewiucne cwue quwibdqw iuqwbwq duwqd wqidubd wquib nindc We ewiucne cwue quwibdqw iuqwbwq duwqd wqidubd wquib nindc`,
      'sent_time': '2 days',
      'sentby': 'Rajinikanth',
      'onCall': false,
      'isAvailable': true,
      'isSentByMe': true,
      'messageStatus': 'viewed',
      'profile_picture': 'https://i.pinimg.com/736x/da/56/cd/da56cd8d973d8916ea3ed397de80b429.jpg'
    }, {
      'id': 2,
      'message': 'We ewiucne cwue wquib nindc',
      'sent_time': '5 hours',
      'sentby': 'Dharmaraj R',
      'onCall': true,
      'isAvailable': false,
      'isSentByMe': false,
      'messageStatus': 'viewed',
      'profile_picture': 'https://avatars.githubusercontent.com/u/66894285?v=4'
    }, {
      'id': 3,
      'message': 'Puqwbwq duwqd wqidubd wquib nindc',
      'sent_time': '30 min',
      'sentby': 'Rajinikanth',
      'onCall': false,
      'isAvailable': true,
      'isSentByMe': true,
      'messageStatus': 'viewed',
      'profile_picture': 'https://i.pinimg.com/736x/da/56/cd/da56cd8d973d8916ea3ed397de80b429.jpg'
    }, {
      'id': 2,
      'message': 'We ewiucne cwue wquib nindc',
      'sent_time': '30 min',
      'sentby': 'Dharmaraj R',
      'onCall': true,
      'isAvailable': false,
      'isSentByMe': false,
      'messageStatus': 'viewed',
      'profile_picture': 'https://avatars.githubusercontent.com/u/66894285?v=4'
    }, {
      'id': 3,
      'message': 'Puqwbwq duwqd wqidubd wquib nindc',
      'sent_time': '25 min',
      'sentby': 'Rajinikanth',
      'onCall': false,
      'isAvailable': true,
      'isSentByMe': true,
      'messageStatus': 'viewed',
      'profile_picture': 'https://i.pinimg.com/736x/da/56/cd/da56cd8d973d8916ea3ed397de80b429.jpg'
    }, {
      'id': 2,
      'message': 'We ewiucne cwue wquib nindc',
      'sent_time': '23 min',
      'sentby': 'Dharmaraj R',
      'onCall': true,
      'isAvailable': false,
      'isSentByMe': false,
      'messageStatus': 'viewed',
      'profile_picture': 'https://avatars.githubusercontent.com/u/66894285?v=4'
    }, {
      'id': 3,
      'message': 'Puqwbwq duwqd wqidubd wquib nindc',
      'sent_time': '20 min',
      'sentby': 'Rajinikanth',
      'onCall': false,
      'isAvailable': true,
      'isSentByMe': true,
      'messageStatus': 'viewed',
      'profile_picture': 'https://i.pinimg.com/736x/da/56/cd/da56cd8d973d8916ea3ed397de80b429.jpg'
    }, {
      'id': 2,
      'message': 'We ewiucne cwue wquib nindc',
      'sent_time': '3 min',
      'sentby': 'Dharmaraj R',
      'onCall': true,
      'isAvailable': false,
      'isSentByMe': false,
      'messageStatus': 'sent',
      'profile_picture': 'https://avatars.githubusercontent.com/u/66894285?v=4'
    },{
      'id': 2,
      'message': 'We ewiucne cwue wquib nindc',
      'sent_time': '2 min',
      'sentby': 'Dharmaraj R',
      'onCall': true,
      'isAvailable': false,
      'isSentByMe': false,
      'messageStatus': 'sent',
      'profile_picture': 'https://avatars.githubusercontent.com/u/66894285?v=4'
    },{
      'id': 2,
      'message': 'We ewiucne cwue wquib nindc',
      'sent_time': '2 min',
      'sentby': 'Dharmaraj R',
      'onCall': true,
      'isAvailable': false,
      'isSentByMe': false,
      'messageStatus': 'sent',
      'profile_picture': 'https://avatars.githubusercontent.com/u/66894285?v=4'
    },{
      'id': 2,
      'message': 'We ewiucne cwue wquib nindc',
      'sent_time': '20 sec',
      'sentby': 'Dharmaraj R',
      'onCall': true,
      'isAvailable': false,
      'isSentByMe': false,
      'messageStatus': 'sent',
      'profile_picture': 'https://avatars.githubusercontent.com/u/66894285?v=4'
    }
  ]
  return (
    <div id='RightMain'>
      {messages.map((message) => {
        return message.isSentByMe ?
          (
            <div key={message.id} className='FRSS messageDiv messageDivLeft'>
              <div className='FCCC dp_time'>
                <div className='dp_div'>
                  <img src={message.profile_picture} className='profilePicture' />
                  {
                    message.onCall ? <FaPhoneAlt className="myStatus myStatusIsOnCall" title={message.status} /> :
                      message.isAvailable ? <TbCircleDotFilled className="myStatus myStatusIsOnline" title={message.status} /> :
                        <RiWifiOffLine className="myStatus myStatusIsOffline" title={message.status} />
                  }
                </div>
                <span className='sent_time'>{message.sent_time}</span>
              </div>
              <div className='FCSC sentby_and_message'>
                <pre className='message'>
                  {message.message}
                </pre>
              </div>
            </div>
          ) : (
            <div key={message.id} className='FRSE messageDiv messageDivRight'>
              <div className='FCEC sentby_and_message'>
                <pre className='message'>
                  {message.message}
                  <span className="sent_and_viewed">
                    {message.messageStatus === 'viewed' ? <BiCheckDouble /> : <BiCheck />}
                  </span>
                </pre>
              </div>
              <div className='FCCC dp_time'>
                <div className='dp_div'>
                  <img src={message.profile_picture} className='profilePicture' />
                  {
                    message.onCall ? <FaPhoneAlt className="myStatus myStatusIsOnCall" title={message.status} /> :
                      message.isAvailable ? <TbCircleDotFilled className="myStatus myStatusIsOnline" title={message.status} /> :
                        <RiWifiOffLine className="myStatus myStatusIsOffline" title={message.status} />
                  }
                </div>
                <span className='sent_time'>{message.sent_time}</span>
              </div>
            </div>
          );
      })}
    </div>
  )
}
