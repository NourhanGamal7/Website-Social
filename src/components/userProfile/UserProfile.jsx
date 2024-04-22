import React from 'react'
import './userProfile.css'
// =======================FackAPI Data=====================
import CurrentUserData from '../../FackApis/CurrentUserData'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeed, faLink, faMessage } from '@fortawesome/free-solid-svg-icons'
// =======================FackAPI Data=====================
const UserProfile = () => {
  return (
    <div className='userProfile'>
        <div className="cover-photo">
            <img src={CurrentUserData.map(user=> (user.CoverPhoto))} alt="" />
        </div>
        <div className="profile-info">
            <img src={CurrentUserData.map(user=> (user.ProfileImage))} alt="" />
            <div className="user-name">
                <h3>{CurrentUserData.map(user=> (user.name))}</h3>
                <h5>{CurrentUserData.map(user=> (user.Username))}</h5>
            </div>
            <div className="profile-button">
                <Link to='/chatbox/id'>
                  <button className='btn btn-primary'>
                    <FontAwesomeIcon icon={faMessage} />Message
                  </button>
                </Link>
                  <button className='btn btn-primary'>
                    <FontAwesomeIcon icon={faFeed} />Follow Me
                  </button>
                  <button className='btn '>
                    <FontAwesomeIcon icon={faLink} />
                  </button>
            </div>
            <p className="bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                   Mollitia eum dolore cumque esse sunt quidem nemo modi
                </p>
        </div>
    </div>
  )
}

export default UserProfile