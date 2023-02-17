import React from 'react'
import './overview.css'
import Card from './Card'
const Overview = () => {
    return (
        <div className='overview'>
            <div className='row row-1'>
                <div className='whats'>
                    <div className="line"></div>
                    <h3>What is GPT-3</h3>
                </div>
                <div className='text_dev'><p className='text text_overview'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p></div>
            </div>
            <div className='row row-2'>
                <span className='gradient__text heading_overview_text'>The possibilities are beyond your imagination</span>
                <span className='exp_text'>Explore The Library</span>
            </div>
            <div className='row row-3'>
                <Card heading={"Chatbots"} body={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "}/>
                <Card heading={"Knowledgebase"} body={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}/>
                <Card heading={"Education"} body={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}/>
            </div>
        </div>
    )
}

export default Overview