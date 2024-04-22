import React from 'react'
import './rightbar.css'
import Message from '../message/Message'
import FirendReqe from '../firendReqe/FirendReqe'
const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="right-container">
        <Message/>
        <FirendReqe/>
      </div>
    </div>
  )
}

export default RightBar