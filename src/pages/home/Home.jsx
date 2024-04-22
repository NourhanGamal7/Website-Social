import React from 'react'
import './home.css'
import Stories from '../../components/stories/Stories'
import AddPost from '../../components/addpost/AddPost'
import Feeds from '../../components/feed/Feeds'

const Home = () => {
  return (
    <>
    <Stories/>
    <AddPost/>
    <Feeds/>
    </>
  )
}

export default Home