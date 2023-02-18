import React from 'react'
import Blog1 from '../../assets/blog01.png'
import Blog2 from '../../assets/blog02.png'
import Blog3 from '../../assets/blog03.png'
import Blog4 from '../../assets/blog04.png'
import Blog5 from '../../assets/blog05.png'
import BlogCard from './BlogCard'
import './blog.css'

const Blog = () => {
    const blogs = [
        {
            img: Blog1,
            title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date:"Sep 26, 2021"
        },
        {
            img: Blog2,
            title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date:"Sep 26, 2021"
        },       
        {
            img: Blog3,
            title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date:"Sep 26, 2021"
        },       
        {
            img: Blog4,
            title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date:"Sep 26, 2021"
        },      
        {
            img: Blog5,
            title:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date:"Sep 26, 2021"
        }
]
    return (
        <div className='blog'>
            <div className="wrapper">
                <h2 className='gradient__text blog_heading'>A lot is happening,<br />We are blogging about it.</h2>
                <div className="grid">
                {
                    blogs.map((blog, index) => (
                        <BlogCard image={blog.img} text={blog.title} date={blog.date} key={index} />
                    )) 
                }
                </div>
            </div>
        </div>
    )
}

export default Blog