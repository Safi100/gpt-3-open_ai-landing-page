import React from 'react'
import Google from "../../assets/google.png"
import Shopify from "../../assets/shopify.png"
import Slack from "../../assets/slack.png"
import Dropbox from "../../assets/dropbox.png"
import Atlassian from "../../assets/atlassian.png"
import "./companies.css"
const Companies = () => {
    return (
        <div className='companies_container'>
            <div className="wrapper">
                <img src={Google} alt="Google logo" />
                <img src={Slack} alt="Slack logo" />
                <img src={Atlassian} alt="Atlassian logo" />
                <img src={Dropbox} alt="Dropbox logo" />
                <img src={Shopify} alt="Shopify logo" />
            </div> 
        </div>
    );
}

export default Companies
