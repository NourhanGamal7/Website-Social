import React from 'react'
import './comment.css'
//==========================FackAPI Data================================
import CommetData from '../../FackApis/CommetData'
import CurrentUserData from '../../FackApis/CurrentUserData'
import { Link } from 'react-router-dom'

//==========================FackAPI Data================================
const Comment = () => {
  return (
    <div className='comments'>
        <div className="writebox">
            <form action="">
                <div className="user">
                    <img src={CurrentUserData.map(user=> (user.ProfileImage))} alt="" />
                    <input type="text" placeholder='Write a Comment' />
                    <button type='submit' className='btn btn-primary'>Send</button>
                </div>
            </form>
        </div>
        {
            CommetData.map(comment=> (
                <Link to="/profile/id">
                    <div className="user" key={comment.id}>
                        <img src={comment.commentProfile} alt="" />
                        <div>
                            <h5>{comment.name}</h5>
                            <p>{comment.CommentText}</p>
                        </div>
                        <small>1h</small>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default Comment