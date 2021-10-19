import React ,  {useState , useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import TopBar from "../../components/topbar/TopBar"
import RightBar from '../../components/rightbar/RightBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

import './profile.css'
function Profile(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user , setUser] = useState('')
    const username = useParams().username;
    
    useEffect(() => {
        ( async () => {
             const res = await axios.get(`/user?username=${username}`)
             console.log(res)
             setUser(res.data)
        })()
     }, [username])
    return (
        <div>
            <TopBar />
            <div className="profileContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={user.convertPicture || PF +  'person/nocover.png'} />
                            <img className="profileUserImg" src={ user.profilePicture || PF +  'person/noavatar.png'}  />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </div>
    )
}

Profile.propTypes = {

}

export default Profile