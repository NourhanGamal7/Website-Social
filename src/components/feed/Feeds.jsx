import React from 'react'
import './feeds.css'
import Feed from './Feed'
// =========================FackAPI Data========================
import HomeFeedData from '../../FackApis/HomeFeedData'
// =========================FackAPI Data========================
const Feeds = () => {
  return (
    <div className='feeds'>
       {
        HomeFeedData.map(fed=> (
            <Feed fed ={fed} key={fed.key} />
        ))
       } 
    </div>
  )
}

export default Feeds