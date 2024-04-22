import React, { useState } from 'react'
import './feeds.css'

import { Link } from 'react-router-dom'
// ========================FontAwesom ====================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faListDots, faShare } from '@fortawesome/free-solid-svg-icons'

//==========================FackAPI Data================================

import Comment from '../comment/Comment'
//==========================FackAPI Data================================
const Feed = ({fed}) => {
  let [openComment, setOpenComment] = useState(false)
  const CommentHandeler =()=> {
    setOpenComment(!openComment)
  }
  return (
    <div className='feed' key={fed.id}>
        <div className="top-content">
            <Link to='/profile/id'>
                <div className="user">
                    <img src={fed.feedprofile} alt="" />
                    <div>
                        <h5>{fed.name}</h5>
                        <small>1 Minutes Ago</small>
                    </div>
                </div>
            </Link>
            <span><FontAwesomeIcon icon={faListDots} /></span>
        </div>
        <div className="mid-content">
            <p>{fed.des}</p>
            <img src={fed.feedImage} alt="" />
        </div>
        <div className="bottom-content">
            <div className="action-item">
              <span> <FontAwesomeIcon icon={faHeart}/>14 Like</span>
            </div>
            <div className="action-item" onClick={CommentHandeler}>
              <span> <FontAwesomeIcon icon={faComment}/>2 Comment</span>
            </div>
            <div className="action-item">
              <span> <FontAwesomeIcon icon={faShare}/>1 1 Share</span>
            </div>
        </div>
        {openComment && <Comment/>}
    </div>
  )
}

export default Feed