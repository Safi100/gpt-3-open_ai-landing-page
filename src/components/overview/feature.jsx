import React from 'react'
import './overview.css'
const Feature = ({heading, body}) => {
    return (
        <div className='feature'>
            <div className="line"></div>
            <h3 className='heading_feature'>{heading}</h3>
            <p className='body_feature'>{body}</p>
        </div>
    )
}

export default Feature