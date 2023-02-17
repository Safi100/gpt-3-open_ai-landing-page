import React from 'react'
import './overview.css'
const Card = ({heading, body}) => {
    return (
        <div className='card'>
            <div className="line"></div>
            <h3 className='heading_card'>{heading}</h3>
            <p className='body_card'>{body}</p>
        </div>
    )
}

export default Card