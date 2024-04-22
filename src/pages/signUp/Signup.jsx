import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className="signup">
        <div className="card">
            <div className="left">
                <h2>-<br/> NapaExtra SignUp <br/> - </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Aspernatur rem maxime facilis modi id vel debitis
                </p>
                <span>Don't Have An Account?</span>
                <Link to='/login'>
                    <button className='btn btn-primary'>Login</button>
                </Link>
                
            </div>
            <form className="right">
                <input type="text" required placeholder='username' />
                <input type="email" required placeholder='email' />
                <input type="password" required placeholder='password' />
                <button type='submit' className='btn'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Signup