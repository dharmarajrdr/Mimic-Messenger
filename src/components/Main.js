import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import '../styles/Main.css';

export default function Main() {
  return (
    <div id='Main' className='FRCC'>
        <LeftContainer />
        <RightContainer />
    </div>
  )
}
