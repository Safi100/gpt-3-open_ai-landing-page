import React from 'react'
import "./navbar.css"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <h1 className="logo"><a href="/">GPT-3</a></h1>
                <div className='links_container'>
                    <div className='close-icon'><span className='close_btn'>x</span></div>
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

export default Navbar;
