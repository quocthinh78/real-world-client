import React , {useState , useEffect , useContext} from 'react'

import PropTypes from 'prop-types'
import axios from "axios"
import {AuthContext} from '../../context/authContext'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'

function Feed({username}) {
    const {user} = useContext(AuthContext)
    const [Posts , setPosts] = useState([]);
    useEffect(() => {
       ( async () => {
            const res = username ?  await axios.get(`/post/profile/${username}`)  : await axios.get(`/post/timeline/${user._id}`)
            console.log(res)
            setPosts(res.data)
       })()
    }, [username , user._id])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((post , i) => (
                    <Post key={i} post={post} />
                ))}
            </div>
        </div>
    )
}

Feed.propTypes = {

}

export default Feed

