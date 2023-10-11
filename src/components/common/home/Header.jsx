import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import cartimg from "../assets/images/cart.png"
import { BiSearch } from "react-icons/bi"
import { BsBagCheck } from "react-icons/bs"
import { RiUser3Line } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlineDelete } from "react-icons/ai"
import { connect, useDispatch, useSelector } from "react-redux"

export const Header = () => {
  // navbar
  const [mobile, setMobile] = useState(false)
  // scroll navbar
  const [cartList, setCartList] = useState(false)
  const handleClose = () => {
    setCartList(null)
  }

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  }) 
  
  // cart add in shop
  const getdata = useSelector((state) => state.cartReducer.carts)
  console.log(getdata)
  
  return (
    <>
      <header className='header'>
        <div className='container'>
          <nav>
            <div className='toggle'>
              <button onClick={() => setMobile(!mobile)}>{mobile ? <AiOutlineClose className='close heIcon' /> : <AiOutlineMenu className='open heIcon' />}</button>
            </div>            
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
            <div className='right_card'>
              <button className='button'>
                <BsBagCheck className='shop heIcon' />
                MY CART<span> ({getdata.length})</span>
              </button>
              <div className={cartList ? "showCart" : "hideCart"}>
              </div>
              </div>
          </div>
        </div>
      </header>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  }
}
connect(mapStateToProps)(Header)
