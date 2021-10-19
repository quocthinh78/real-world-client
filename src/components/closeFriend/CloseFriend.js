import React from 'react'
import PropTypes from 'prop-types'
import './closeFriend.css'
function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={PF + user.profilePicture} />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

CloseFriend.propTypes = {

}

export default CloseFriend

