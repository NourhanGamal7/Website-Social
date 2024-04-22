import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
// ================== FontAwesome Icon=====================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
// ================== FontAwesome Icon=====================
// ==================FackImage Api=======================
import CurrentUser from '../../FackApis/CurrentUserData'
// ==================FackImage Api=======================
import DarkMode from '../darkmod/DarkMode'
const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        {/*=========================== NavAria left ===========================*/}
        <div className="nav-left">
          <Link to='/'>
          <h3 className='logo'>NapaExtra</h3>
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to='/profile/id'>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div className="Nav-searchbar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="search" />
          </div>
        </div>
        {/*=========================== NavAria Right ===========================*/}
        <div className="nav-right">
          <Link to='/chatbox/id'>
           <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to='/'>
           <FontAwesomeIcon icon={faBell} />
          </Link>
          <DarkMode/>
          <Link to='/chatbox/id'>
           <FontAwesomeIcon icon={faBars} />
          </Link>
          <div className="user">
            <img src={CurrentUser.map(user =>(user.ProfileImage))} alt="" />
            <h4>Beg Joker</h4>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav