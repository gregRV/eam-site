import React from 'react'
import { Router } from "@reach/router"
import BlogPosts from '../components/Blog'
import Post from './post'
// import { navigate } from "gatsby"

const Blog = () => {

  return (<div>
      <Router basepath="/blog">
        <Post path="/:id" />
        <BlogPosts path="/" />
        <BlogPosts default />
      </Router>
  </div>);
}

export default Blog
