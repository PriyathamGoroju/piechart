import React  from 'react'
import './component.css'
import Logout from './Logout'
export default function Navbar() {
  return (
    <nav>
        <img src='/logo192.png' alt='logo' width='40px' height='40px'></img>
        <div>
            <h3>{localStorage.getItem('username')||''}</h3>
            <Logout />
        </div>
    </nav>
  )
}
