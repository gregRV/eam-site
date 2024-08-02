import React, { useState, useEffect } from 'react'

import styles from './blog.module.less'

import banner1 from '../../../assets/images/account-login/mfg-account_login-min-1.png'
import { navigate } from "@reach/router"

const BlogListCover = ({ cover }) => {
    const [error, setError] = useState(false);

    const onError = () => {
        setError(true);
    };

    return (
        <div>
            {!error && <img src={`https://eam-dashboard-api-eqcg4.ondigitalocean.app/uploads/${cover}`} alt="cover" onError={onError} />}
        </div>
    );
}

export default BlogListCover
