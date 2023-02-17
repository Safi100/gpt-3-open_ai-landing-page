import React from 'react'
import Feature_Image from '../../assets/Feature_Image.png'
import './possibilities.css'
const Possibilities = () => {
    return (
        <div className='possibilities'>
            <div className="wrapper">
                <div className='img_conitaner'><img src={Feature_Image} alt="Feature_Image"/></div>
                <div className='posibilities__info_container'>
                    <p className='posibilities_request'>Request Early Access to Get Started</p>
                    <h2 className='gradient__text gradient__text__posibilities'>The possibilities are beyond your imagination</h2>
                    <p className='text text__posibilities'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <p className='early_text'>Request Early Access to Get Started</p>
                </div>
            </div>
        </div>
    )
}

export default Possibilities