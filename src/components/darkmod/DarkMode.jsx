import React from 'react'
// ================== FontAwesome Icon=====================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

// ================== FontAwesome Icon=====================
import './darkMode.css'
const DarkMode = () => {
    const DarkHandele =() => {
        document.querySelector('body').classList.toggle('darkmood')
    }
  return (
    <div className='darck-mood-icon'>
        <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandele} />
    </div>
  )
}

export default DarkMode