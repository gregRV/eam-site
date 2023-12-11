import React, { useState, useEffect } from 'react'
import Banner from '../components/Images/Banner/Banner'
// import axios from 'axios'
// import { navigate } from "gatsby";

import styles from './blog.module.less'

import banner1 from '../../assets/images/account-login/mfg-account_login-min-1.png'

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_REST_API_URL}/api/post`)
    .then(response => response.json())
    .then(json => setPosts(json.data));
  }, []);

  const onPostClick = (id) => {
    window.location.href = `/blog/${id}`;
  }

  return (<div className={styles.blogContainer}>
    <Banner src={banner1} />
    <div className={styles.section}>
      <h2>Blog</h2>

      <div style={{ marginTop: '30px' }}>
        {posts.map(post => (<div className={styles.post} key={post._id} onClick={() => onPostClick(post._id)}><h1>{post.title}</h1><p>{post.short_description}</p></div>))}
      </div>
    </div>
  </div>)
}

export default Blog
