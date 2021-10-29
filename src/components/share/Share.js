import React  , {useContext ,useRef ,useState} from 'react'
import PropTypes from 'prop-types'
import {AuthContext} from '../../context/authContext'
import axios from 'axios'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';

import "./share.css"
function Share(props) {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [file , setFile] = useState(null)
    const desc = useRef();
    const handleSubmit = async (e) => {
        console.log("aaa")
        e.preventDefault()
        const newPost = {
            userId : user._id,
            desc : desc.current.value,
        }
        if(file) {
            console.log("🚀 ~ file: Share.js ~ line 20 ~ handleSubmit ~ file", file)
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("file" , file);
            data.append("name" , fileName);
            newPost.img = fileName ;
            try {
                await axios.post('upload' , data)
            } catch (error) {
                console.log(error)
            }
        }
        try {
            await axios.post('/post' , newPost)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + 'noavatar.png'} />
                    <input placeholder={`What do you mind ${user.username} ?`} className="shareInput" ref={desc} onChange={e => setFile(e.target.files[0])} />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo/Video</span>
                            <input style={{display : 'none'}} type="file" id="file" access=".png,jpeg,jpg"  />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>

        </div>
    )
}

Share.propTypes = {

}

export default Share

