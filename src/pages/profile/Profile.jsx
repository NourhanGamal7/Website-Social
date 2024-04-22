import React from 'react'
// ===============================================
// import Stories from '../../components/stories/Stories'
import AddPost from '../../components/addpost/AddPost'
import Feeds from '../../components/feed/Feeds'
import UserProfile from '../../components/userProfile/UserProfile'
// ===============================================
const Profile = () => {
  return (
    <>
    {/* <Stories/> */}
    <UserProfile/>
    <AddPost />
    <Feeds/>
    </>
  )
}

export default Profile