import React, { useState, useEffect } from 'react'
import Banner from '../Images/Banner/Banner'
import BlogListCover from './blogListCover';
// import axios from 'axios'
// import { navigate } from "gatsby";

import styles from './blog.module.less'

import banner1 from '../../../assets/images/account-login/mfg-account_login-min-1.png'
import { navigate } from "@reach/router"

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://eam-dashboard-api-eqcg4.ondigitalocean.app/api/post`)
      .then(response => response.json())
      .then(json => setPosts(json.data));
  }, []);

  const onPostClick = (id) => {
    // window.location.href = `/blog/${id}`;
    navigate(`/blog/${id}`);
  }

  return (<div>
    <div className={styles.blogContainer}>
      <Banner src={banner1} />
      <div className={styles.section}>
        <h2>Blog</h2>

        <div className={styles.postContainer}>
          {posts.map(post => (
          <div className={styles.post} key={post._id} onClick={() => onPostClick(post._id)}>
            <BlogListCover cover={post.cover}/>
            <div className={styles.content}>
            <h1>{post.title}</h1>
            <p>{post.short_description}</p>
            </div>
          </div>))}
        </div>
      </div>
    </div>
  </div>);
}

export default BlogPosts
