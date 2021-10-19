import React from 'react'
import PropTypes from 'prop-types'
import TopBar from "../../components/topbar/TopBar"
import RightBar from '../../components/rightbar/RightBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

import "./home.css"
function Home(props) {
    return (
        <div>
            <TopBar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <RightBar />
            </div>
        </div>
    )
}

Home.propTypes = {

}

export default Home

