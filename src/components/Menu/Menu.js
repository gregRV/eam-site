import React from 'react'
import Link from 'gatsby-link'

import styles from './menu.module.less'

const Menu = () => (
  <ul className={styles.container}>
    <li><Link to='/about-empire'>About Empire</Link></li>
    <li><Link to='/brokerage'>Brokerage</Link></li>
    <li><Link to='/asset-management'>Asset Management</Link></li>
    <li><Link to='/investment-banking'>Investment Banking</Link></li>
    <li><Link to='/login'>Account Login</Link></li>
    <li><Link to='/join-our-team'>Join Our Team</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/contact-us'>Contact Us</Link></li>
  </ul>
)

export default Menu
