// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from 'react-redux'
import { updateIsSignedIn } from '../../Redux/Reducer'

const Navbar = () => {

  const dispatch = useDispatch()
  const isSignedIn = useSelector((state) => state.location.isSignedIn)
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(updateIsSignedIn(!isSignedIn))
    navigate("/signup")
  }

  // const handleLoginClick = () => {
  //   navigate("/login")
  // }
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <a href='./' >
          <div className="navNameLogo">
            <img src='bookHotelLogo.png' alt="" className='navLogo' />
            <span className='navName'>BookHotel.com</span>
          </div>
        </a>

        <div className='navItems'>
          <button className='navButton' onClick={handleClick}>{isSignedIn ? 'Signout' : 'Sign In'}</button>
          {/* <button className='navButton' onClick={handleLoginClick}>{isSignedIn ? 'Logout' : 'Login' } </button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar