import React from 'react'
import './firenereqe.css'
// =====================Fack ApI Data========================
import FirendReqeData from '../../FackApis/FriendReqData'
import { Link } from 'react-router-dom'
// =====================Fack ApI Data========================
const FirendReqe = () => {
  return (
    <div className='firend-Requests'>
      <h4>Firend Requests</h4>
      {
        FirendReqeData.map(firend => (
          <div className="request">
            <Link to= '/profile/id'>
            <div className="info" key={firend.id} >
              <div className="user">
                <img src={firend.img} alt="" />
                <h5>{firend.name}</h5>
              </div>
              <div className="info-name">
                <p>{firend.info}</p>
              </div>
            </div>
            </Link>

            <div className="action">
              <button className='btn btn-primary'>Accept</button>
              <button className='btn btn-red'>Delete</button>
            </div>
          </div>
          
        ))
      }
    </div>
  )
}

export default FirendReqe