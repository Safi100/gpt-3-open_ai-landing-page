import React from 'react'
import FeatureBlock from './Feature_block'
import './feature.css'
const Feature = () => {
    return (
        <div className='feature'>
            <div className="wrapper">
                <div className='feature_col_1'>
                    <h2 className='gradient__text heading_feature'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                    <p className='early_text'>Request Early Access to Get Started</p>
                </div>
                <div className='feature_container'>
                    <FeatureBlock heading={"Improving end distrusts instantly "} body={"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."} />
                    <FeatureBlock heading={"Become the tended active"} body={"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."} />
                    <FeatureBlock heading={"Message or am nothing"} body={"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."} />
                    <FeatureBlock heading={"Really boy law county"} body={"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."} />
                </div>
            </div>
        </div>
    )
}

export default Feature