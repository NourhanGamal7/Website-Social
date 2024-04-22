import React from 'react'


// ===============Pages====================
import Login from '../pages/login/Login'
import Signup from '../pages/signUp/Signup'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import ChatBox from '../pages/chatbox/ChatBox'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
// ===============Pages====================
// =================Components=======================
import Nav from '../components/nav/Nav'
import LeftBar from '../components/lefybar/LeftBar'
import RightBar from '../components/rightbar/RightBar'

// =================Components=======================
const LayOut = () => {
  // ============feed=================
  const Feed =() => {
    return(
      <>
      <Nav/>
      <main>
        <LeftBar/>
        <div className="container">
          <Outlet/>
        </div>
        <RightBar/>
      </main>
      </>
    )
  }
  // ===========router==============
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Feed/>,
      children: [
        {
          path: '/',
         element: <Home/>
        },
        {
          path: '/profile/:id',
         element: <Profile/>
        },
        {
          path: '/chatbox/:id',
         element: <ChatBox/>
        },
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/signup',
      element: <Signup/>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />

    </>
  )
}

export default LayOut