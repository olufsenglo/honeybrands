import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import cartimg from "../assets/images/cart.png"
import { BiSearch } from "react-icons/bi"
import { BsBagCheck } from "react-icons/bs"
import { RiUser3Line } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlineDelete } from "react-icons/ai"
import { navlist } from "../assets/data/data"
import { connect, useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { DELETE } from "../../controller/action"
import { useEffect } from "react"

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
            
            
            
          </div>
        </div>
      </header>
    </>
  )
}

