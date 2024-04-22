import React from 'react'
import './message.css'
// =================FackData Message=======================
import MessageData from '../../FackApis/MessageData'
// =================FackData Message=======================
// ===================font Awesome=====================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Message = () => {
  return (
    <div className='messages'>
      <div className="message-top">
        <h4>Message</h4>
        <FontAwesomeIcon icon={faEdit} />
      </div>
      <div className="message-search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" placeholder='Search Message' />
      </div>
      <div className="border-div"></div>
        {
          MessageData.map(mess => (
            <Link to='chatbox/id'>
              <div className="message" key={mess.id}>
                <div className="user">
                  <img src={mess.img} alt="" />
                  <div className="green-active"></div>
                  <div className="message-body">
                    <h5> {mess.name} </h5>
                    <p>{mess.mText}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      
    </div>

  )
}

export default Message