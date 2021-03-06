import React from 'react'
import Link from 'gatsby-link'
import logo from '../../../../../assets/images/header/Empire Full@2x-min.png'

import styles from './main-logo.module.less'

const MainLogo = () => (
  <div className={styles.container}>
    <Link to='/'>
      <img src={logo} />
    </Link>
  </div>
)

export default MainLogo
