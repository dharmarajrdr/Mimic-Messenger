import React from 'react'
import '../styles/ListOfChatGroupCalls.css';
import ChatPreview from './ChatPreview';

export default function ListOfChatGroupCalls() {
    const list = [
        {
            'id': 1,
            'profile_picture': 'https://i.pinimg.com/736x/da/56/cd/da56cd8d973d8916ea3ed397de80b429.jpg',
            'name': 'Rajinikanth',
            'latestMessage': 'Naa oru thadava sonna, nooru thadava sonna maari...',
            'latestMessageType': 'string',
            'type': 'Chats',
            'onCall': false,
            'isAvailable': true,
            'isOpened': true,
            'status': 'Online',
            'isUnreadMessage': true
        }, {
            'id': 2,
            'profile_picture': 'https://e0.pxfuel.com/wallpapers/610/7/desktop-wallpaper-vega-entertainment-wishes-a-very-happy-birtay-to-actor-sivakarthikeyan-siva-karthikeyan-acto-sivakarthikeyan-actors.jpg',
            'name': 'Sivakarthikeyan',
            'latestMessage': `Thala style la sollanum na, It's just a beginning.`,
            'latestMessageType': 'meta',
            'type': 'Chats',
            'onCall': true,
            'isAvailable': false,
            'isOpened': false,
            'status': 'On Call',
            'isUnreadMessage': false
        }, {
            'id': 3,
            'profile_picture': 'https://4kwallpapers.com/images/wallpapers/virat-kohli-indian-cricketer-2560x2560-2186.jpg',
            'name': 'Virat Kohli',
            'latestMessage': 'Ee sala cup,...',
            'latestMessageType': 'string',
            'type': 'Chats',
            'onCall': false,
            'isAvailable': false,
            'isOpened': false,
            'status': 'Offline',
            'isUnreadMessage': false
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
