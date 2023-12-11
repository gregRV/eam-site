import React from 'react';
import Banner from '../components/Images/Banner/Banner';
// import axios from 'axios'

import styles from './post.module.less';
import DOMPurify from 'isomorphic-dompurify';

import banner1 from '../../assets/images/account-login/mfg-account_login-min-1.png';
import { useState } from 'react';
import { useEffect } from 'react';

const Post = ({ post }) => {
  const [data, setData] = useState();
  console.log('Post', post);

  useEffect(() => {
    const chunks = window.location.pathname.split('/');
    console.log("Chunks", chunks);

    fetch(`${process.env.REACT_APP_REST_API_URL}/api/post/${chunks[2]}`)
    .then(response => response.json())
    .then(json => setData(json.data[0]));
  }, [window.location.pathname]);

  return (
    <div className={styles.postContainer}>
      <Banner src={banner1} />
      <div className={styles.section}>
        <h2>{data ? data.title : ''}</h2>
        <p>
          {data ? data.short_description : ''}
        </p>
        <div dangerouslySetInnerHTML={{
                __html: data ? DOMPurify.sanitize(data.body) : '',
              }}></div>
      </div>
    </div>
  );
};

export default Post;
