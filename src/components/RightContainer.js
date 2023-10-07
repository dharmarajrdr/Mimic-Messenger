import React from 'react'
import '../styles/RightContainer.css'
import RightHeader from './RightHeader'
import RightMain from './RightMain'
import RightFooter from './RightFooter'

export default function RightContainer() {
  return (
    <div id='RightContainer'>
      <RightHeader />
      <RightMain />
      <RightFooter />
    </div>
  )
}
