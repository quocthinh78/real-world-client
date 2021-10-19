import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Search, Person, Chat, Notifications } from '@material-ui/icons';

import './topbar.css'
function TopBar(props) {
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <Link to="/" style={{textDecoration : 'none'}}>
                    <span className='logo'>QuocthinhSocial</span>
                </Link>
            </div>
            <div className="topBarCenter">
                <div className="searchBar">
                    <Search className='searchIcon' />
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">HomePage</div>
                    <div className="topbarLink">TimeLine</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconPadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconPadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconPadge">1</span>
                    </div>
                </div>
                <img src='/assets/person/1.jpeg' className='topbarImg' />
            </div>
        </div>
    )
}

TopBar.propTypes = {

}

export default TopBar

