import { FaSearch } from "react-icons/fa";
import React from 'react'
import '../styles/SearchInLeftContainer.css';

export default function SearchInLeftContainer() {
    return (
        <div id="SearchInLeftContainer" className="FRCC">
            <input type='text' placeholder='Search...' autoComplete="off" spellCheck='false' />
            <FaSearch id="searchIcon" />
        </div>
    )
}
