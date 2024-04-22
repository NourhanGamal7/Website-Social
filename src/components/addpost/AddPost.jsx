import React from 'react'
import './addPost.css'
// =======================FackAPI Data========================
import CurrentUserData from '../../FackApis/CurrentUserData'
// =======================FackAPI Data========================
// =======================FontAwesom========================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons'
// import { faViadeo } from '@fortawesome/free-brands-svg-icons'
// =======================FontAwesom========================
const AddPost = () => {
  return (
    <form className='PostForm' >
        <div className="user form-top">
            <img src={CurrentUserData.map(user => (user.ProfileImage))} alt="" />
            <input type="text" placeholder="What's on your mide ? " />
            <button type='submit' className='btn btn-primary'>Post</button>
        </div>
        <div className="post-categories">
            <label htmlFor="file">
                <input type="file" id='file' />
                <span> <FontAwesomeIcon icon={faImage}/>Photo </span>
            </label>
            <label htmlFor="file">
                <input type="file" id='file' />
                <span> <FontAwesomeIcon icon={faVideo}/>Viadeo </span>
            </label>
            <span> <FontAwesomeIcon icon={faTags}/>Tag </span>
            <span> <FontAwesomeIcon icon={faSmile}/>Feeling </span>
        </div>
    </form>
  )
}

export default AddPost