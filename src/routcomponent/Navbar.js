import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  const navLinkStyle= ({isActive}) =>{

    return{
      fontWeight : isActive? 'bold' :'normal',
      fontDecoration: isActive?'none':'underline',
    }

  }


  return (
    <nav>
      <NavLink style={navLinkStyle} to='/'>
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to='/about'>
        About
      </NavLink>
    </nav>
  )
}
