import React from 'react'

const BlogCard = ({image, date, text}) => {
    return (
        <div className='Blog_card'>
            <img src={image} alt="card_img" />
            <div className='card_info'>
                <div>
                    <p className='date'>{date}</p>
                    <div className="card_heading">{text}</div>
                </div>
                <a href='/' className="card_link">Read Full Article</a>
            </div>
        </div>
    )
}

export default BlogCard