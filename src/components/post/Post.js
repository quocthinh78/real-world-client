import React , {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { MoreVert } from "@material-ui/icons"
import {format} from "timeago.js"
import {Users} from '../../dumbyData'
import './post.css'
function Post({post}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    
    const [like , setLike] = useState(post.likes.length);
    const [isLike , setisLike] = useState (false);
    const [user , setUser] = useState('')
    const handleLike = () => {
        setLike(isLike ? like - 1 : like +1);
        setisLike(!isLike)
    }

    useEffect(() => {
        ( async () => {
             const res = await axios.get(`/user?userId=${post.userId}`)
             setUser(res.data)
        })()
     }, [post.userId])
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.dsad || PF + "person/noavatar.png" } alt="" className="postProfile" />
                        <span className="postUserName">{user.username }</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight"><MoreVert /></div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF + post?.img} />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" onClick={handleLike} />
                        <img className="likeIcon" src="/assets/heart.png" onClick={handleLike} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentCount">{post?.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Post.propTypes = {

}

export default Post

