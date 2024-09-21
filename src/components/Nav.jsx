import {Link, NavLink} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'
import logo from '../assets/logo.png' 
import { useState } from 'react'

const Nav=()=>{
          const [menuOpen, setMenuOpen] = useState(false)
  
  
  return(
        <NavStyle> 
        <nav>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" width="150px" />
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen) 

        }}>
          </div>
      </a>
        <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    </nav>
        </NavStyle>
    )
}
export default Nav