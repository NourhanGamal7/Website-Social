import React from 'react'
import './stories.css'
// =====================FackAPI Data=========================
import CurrentUserData from '../../FackApis/CurrentUserData'
// =====================FackAPI Data=========================
// ======================FontAwesome=======================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
// ======================FontAwesome=======================
const UserStories = () => {
  return (
    <div className="story userStory">
       <div className="user">
          <img src={CurrentUserData.map(user =>(user.ProfileImage)) } alt="" />
        </div>
          <img src={CurrentUserData.map(user =>(user.CoverPhoto))} alt="" />
          <label htmlFor="storyFile">
            <FontAwesomeIcon icon={faAdd} />
            <input type="file" id='storyFile' />
          </label>
          <h5>Add Story</h5>
    </div>
  )
}

export default UserStories