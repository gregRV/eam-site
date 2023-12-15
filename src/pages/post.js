import React from 'react';
import Banner from '../components/Images/Banner/Banner';
// import axios from 'axios'

import styles from './post.module.less';
// import sanitizeHtml from 'sanitize-html';

import banner1 from '../../assets/images/account-login/mfg-account_login-min-1.png';
import { useState } from 'react';
import { useEffect } from 'react';

const Post = () => {
  const [data, setData] = useState();
  const [cover, setCover] = useState();

  useEffect(() => {
    const chunks = window.location.pathname.split('/');

    fetch(`${process.env.REACT_APP_REST_API_URL}/api/post/${chunks[2]}`)
    .then(response => response.json())
    .then(json => {
      const data = json.data && json.data.length > 0 ? json.data[0] : {};
      setData(data);
      if(data.cover && data.cover !== '' && data.cover !==null){
        const cover = `${process.env.REACT_APP_REST_API_URL}/uploads/${data.cover}`;
        setCover(cover);
      }
    });
  }, []);

  return (
    <div className={styles.postContainer}>
      <Banner src={banner1} />
      <div className={styles.section}>
        {cover && <img src={cover} alt="cover" />}
        <h2>{data ? data.title : ''}</h2>
        <p>
          {data ? data.short_description : ''}
        </p>
        <div dangerouslySetInnerHTML={{
                __html: data ? data.body : '',
              }}></div>
      </div>
    </div>
  );
};

export default Post;
