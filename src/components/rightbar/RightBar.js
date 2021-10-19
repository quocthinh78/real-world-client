import React from 'react'
import PropTypes from 'prop-types'

import Online from '../online/Online'
import { Users } from "../../dumbyData"
import './rightbar.css'

function RightBar({user}) {

    const HomeRightbar = () => (
        <>
            <div className="birthdayContainer">
                <img className="birthdayImg" src="/assets/gift.png" />
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b>3 other friends</b> have a birthday to day
                </span>
            </div>
            <img className="rightbarAd" src="/assets/ad.png" />
            <h4 className="rightBarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map(user => (
                    <Online key={user.id} user={user} />
                ))}
            </ul>
        </>
    )

    const ProfileRightBar = () => (
        <>
            <h4 className="rightBarProfileTitle">Joe Track</h4>
            <div className="rightBarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City :</span>
                    <span className="rightbarInfoValue">{user.city} </span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From :</span>
                    <span className="rightbarInfoValue">{user.from} </span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship :</span>
                    <span className="rightbarInfoValue">{user.relationships === 1 ? 'Single' :  user.relationships === 2 ? 'Married' : 'Không có cập nhật nào'} </span>
                </div>
            </div>
            <div className="rightbarInfoTitle">
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Joe Trach</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Joe Trach</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Joe Trach</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Joe Trach</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Joe Trach</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Joe Trach</span>
                    </div>
                </div>
            </div>
        </>
    )
    return (
        <div className="rightBar">
            <div className="rightbarWrapper">
               {user ?  <ProfileRightBar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

RightBar.propTypes = {

}

export default RightBar

