import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="wrapper">
                <div className='roww-1'>
                    <h2 className="gradient__text footer_heading">Do you want to step in to the future before others</h2>
                    <button className='early_access_button'>Request Early Access</button>
                </div>
                <div>
                    <div className='footer_row'>
                        <div className='col'>
                            <h3 className="logo"><a href="/">GPT-3</a></h3>
                            <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
                        </div>
                        <div className="col">
                            <p>Links</p>
                            <ul>
                                <li><a href="/">Overons</a></li>
                                <li><a href="/">Social Media</a></li>
                                <li><a href="/">Counters</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <p>Company</p>
                            <ul>
                                <li><a href="/">Terms & Conditions</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <p>Get in touch</p>
                            <ul>
                                <li><a href="/">Crechterwoord K12 182 DK Alknjkcb</a></li>
                                <li><a href="/">085-132567</a></li>
                                <li><a href="/">info@payme.net</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer