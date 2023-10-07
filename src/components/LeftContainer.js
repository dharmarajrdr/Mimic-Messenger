import React from 'react'
import '../styles/LeftContainer.css'
import Profile from './Profile'
import ChatGroupCall from './ChatGroupCall'
import SearchInLeftContainer from './SearchInLeftContainer'
import ListOfChatGroupCalls from './ListOfChatGroupCalls'

export default function LeftContainer() {
  return (
    <div id='LeftContainer'>
      <div className='stickyToTop' id='profileChatGroupCallSearch'>
        <Profile />
        <ChatGroupCall />
        <SearchInLeftContainer />
      </div>
      <ListOfChatGroupCalls />
    </div>
  )
}
