import React from 'react'
import Navbar from "../navbar/Navbar"
import HeaderIllustration from "../../assets/Header-Illustration.png"
import People from "../../assets/people.png"
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <div className="wrapper">
            <div className='row'>
                <div className='header_info'>
                    <h2 className='gradient__text heading_text'>Let’s Build Something amazing with GPT-3 OpenAI</h2>
                    <p className='text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <form className='form'>
                        <input type="email" placeholder='Your Email Address'/>
                        <button>Get Started</button>
                    </form>
                    <div className='people'>
                        <img src={People} alt="People" />
                        <span className='people_text'>1,600 people requested access a visit in last 24 hours</span>
                    </div>
                </div>
                <div className='header_img'><img src={HeaderIllustration} alt="Header-Illustration"/></div>
            </div>
            </div>
        </div>
    )
}

export default Header
