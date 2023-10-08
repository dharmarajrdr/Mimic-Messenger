import { HiDotsVertical } from "react-icons/hi";
import React from 'react';
import '../styles/RightHeader.css';
import { FaSearch } from "react-icons/fa";

export default function RightHeader() {
  return (
    <div className="FRCB" id="RightHeader">
      <div className="FRCC">
        <img src='https://i.pinimg.com/736x/da/56/cd/da56cd8d973d8916ea3ed397de80b429.jpg' className="profilePicture icons" />
        <div className="FCSC" id="name_and_about">
          <p>Rajinikanth</p>
          <span>Aandavan soldran, indha arunachalam seiraan.</span>
        </div>
      </div>
      <div className="search_and_more FRCC">
        <FaSearch id="searchIcon" className="icons" />
        <HiDotsVertical className="icons" />
      </div>
    </div>
  )
}
