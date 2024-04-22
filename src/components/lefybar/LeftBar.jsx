import React from 'react'
import './leftbar.css'
import { Link } from 'react-router-dom'
// =================Fack Api Data=======================
import CurrentUser from '../../FackApis/CurrentUserData'
// =================Fack Api Data=======================
// =================iconImage==================
import Firend from '../../assets/icon/1.png'
import Groups from '../../assets/icon/2.png'
import Market from '../../assets/icon/3.png'
import Watch from '../../assets/icon/4.png'
import gallary from '../../assets/icon/5.png'
import video  from '../../assets/icon/6.png'
import message from '../../assets/icon/7.png'
// =================iconImage==================
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="left-container">
        <div className="menu">
          <Link to='/profile/id'>
            <div className="user">
              <img src={CurrentUser.map(user=> (user.ProfileImage))} alt="" />
              <h4>Beg Joker</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className="item">
              <img src={Firend} alt="" />
              <h4>Firends</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className="item">
              <img src={Groups} alt="" />
              <h4>Groups</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className="item">
              <img src={Market} alt="" />
              <h4>Market</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className="item">
              <img src={Watch} alt="" />
              <h4>Watch</h4>
            </div>
          </Link>
          
        </div>
        <hr/>
        <div className="menu">
          <h4 className="others">Your Shortcuts</h4>
          <Link to='/'>
            <div className="item">
              <img src={gallary} alt="" />
              <h4>Gallaryt</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className="item">
              <img src={video} alt="" />
              <h4>Video</h4>
            </div>
          </Link>
          <Link to='/chatbox/id'>
            <div className="item">
              <img src={message} alt="" />
              <h4>Message</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LeftBar