import React from 'react'
import { Link } from 'react-router-dom';
export default function NavigationBar() {
  return (
    <nav className='navigation-bar'>
        <Link to="/"> Home</Link>
        <Link to="/Userlist" className='Navigation-link'>
            user List
        </Link>
      
    </nav>
  )
}
