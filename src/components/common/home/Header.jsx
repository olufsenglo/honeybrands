import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import cartimg from "../assets/images/cart.png"
import { BiSearch } from "react-icons/bi"

export const Header = () => {
  // navbar
  
  return (
    <>
      <header className='header'>
        <div className='container'>
          <nav>
            
            <div className='left'>
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </div>
            <div className='center'>
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navlist.map((nav, i) => (
                  <li key={i}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className='right'>
            
            <div className='right_search'>
              <input type='text' placeholder='Search Products...' />
              <BiSearch className='serachIcon heIcon' />
            </div>
            <div className='right_user'>
              <RiUser3Line className='userIcon heIcon' />
              <AiOutlineHeart className='userIcon heIcon' />
            </div>
            
          </div>
        </div>
      </header>
    </>
  )
}
