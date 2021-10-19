import React from 'react'
import PropTypes from 'prop-types'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';

import "./share.css"
function Share(props) {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg " src="/assets/person/1.jpeg" />
                    <input placeholder="What do you mind Joe" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
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
                    <div className="shareButton">Share</div>
                </div>
            </div>

        </div>
    )
}

Share.propTypes = {

}

export default Share

