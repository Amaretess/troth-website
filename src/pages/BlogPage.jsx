import React from 'react'
import Section from '../components/common/Section'
import image from '../images/medicareheader.jpeg'
import DisplayBlogs from '../components/blog/DisplayBlogs'

const BlogPage = () => {
    return (
        <div>
            <Section title="Blog" image={image} />
            <DisplayBlogs />
        </div>
    )
}

export default BlogPage
