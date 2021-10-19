import React from 'react'
import PropTypes from 'prop-types'
import './online.css'
function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={PF + user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}

Online.propTypes = {

}

export default Online

