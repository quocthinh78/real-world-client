import React , {useState , useEffect} from 'react'

import PropTypes from 'prop-types'
import axios from "axios"
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'

function Feed({username}) {
    const [Posts , setPosts] = useState([]);
    useEffect(() => {
       ( async () => {
            const res = username ?  await axios.get(`/post/profile/${username}`)  : await axios.get(`/post/timeline/616d2c42e2680eb562bad998`)
            console.log(res)
            setPosts(res.data)
       })()
    }, [])
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

