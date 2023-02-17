import React from 'react'
import './feature.css'
const FeatureBlock = ({heading, body}) => {
    return (
        <div className='feature_block'>
            <div>
                <div className="line"></div>
                <h3 className='feature_heading'>{heading}</h3>
            </div>
            <div><p className='feature_text'>{body}</p></div>
        </div>
    )
}

export default FeatureBlock