import React from 'react';  
import blogStyles from '../../css/About/Blog.module.css';  // Import the CSS Module
import Nav from '../../Components/Nav'

function Blog() {
  return (
    <div>
        <Nav />
        <h1 className={blogStyles.title}>Blog</h1>
    </div>
  );
}

export default Blog;
