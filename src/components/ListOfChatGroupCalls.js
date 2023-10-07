import React from 'react'
import '../styles/ListOfChatGroupCalls.css';
import ChatPreview from './ChatPreview';

export default function ListOfChatGroupCalls() {
    const list = [
        {
            'id': 1,
            'name': 'Dharmaraj R',
            'latestMessage': 'Hi da, enna pandra? Nalla irukaya? Romba naal aachu da.',
            'type': 'Chats',
            'onCall': false,
            'isAvailable': true,
            'status': 'Online',
            'isUnreadMessage' : true
        }, {
            'id': 2,
            'name': 'Dharmaraj R',
            'latestMessage': 'Hi da, enna pandra?',
            'type': 'Chats',
            'onCall': true,
            'isAvailable': false,
            'status': 'On Call',
            'isUnreadMessage' : false
        }, {
            'id': 3,
            'name': 'Dharmaraj R',
            'latestMessage': 'Bye',
            'type': 'Chats',
            'onCall': false,
            'isAvailable': false,
            'status': 'Offline',
            'isUnreadMessage' : false
        }
    ]
    return (
        <div id='ListOfChatGroupCalls'>
            {list.map((e) => {
                return (<ChatPreview element={e} key={e.id} />)
            })}
        </div>
    )
}
