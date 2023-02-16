import React, { useState } from 'react'
import "./navbar.css"
import Hamburger from "../../assets/hamburger-menu.png"
import Close from "../../assets/icon-close.png"
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='navbar'>
            <div className="wrapper">
                <h1 className="logo"><a href="/">GPT-3</a></h1>
                <div>
                    <div className={`hamb_menu ${(isOpen === true) ? 'hide' : '' }`} onClick={()=> setOpen(true)}><span className='open_btn'><img src={Hamburger} alt="Hamburger-menu"/></span></div>
                    <div className={`close-icon ${(isOpen === false) ? 'hide' : '' }`} onClick={()=> setOpen(false)}><span className='close_btn'><img src={Close} alt="close-icon" /></span></div>
                </div>
                <div className={`links_container ${(isOpen === true) ? '' : 'hide' }`}>
                    <ul className='ul_list'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">What is GPT?</a></li>
                        <li><a href="/">Open AI</a></li>
                        <li><a href="/">Case Studies</a></li>
                        <li><a href="/">Library</a></li>
                    </ul>
                    <div className="sign_button_container">
                        <a className='sign sign_in' href="/">Sign in</a>
                        <a className='sign sign_up' href="/">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar