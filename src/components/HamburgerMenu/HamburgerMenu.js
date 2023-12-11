import React from 'react'
import Link from 'gatsby-link'

import CloseIcon from '../../../assets/images/menu/close-menu-min.png'
import HamburgerIcon from '../../../assets/images/menu/hamburger-menu-min.png'
import Image from '../../components/Images/Image'

import styles from './hamburgerMenu.module.less'

class HamburgerMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: true
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render () {
    const { isOpen } = this.state
    return isOpen
      ? (
        <div className={styles.hamburger} onClick={this.toggleMenu}>
          <Image src={HamburgerIcon} />
        </div>
      )
      : (
        <ul className={styles.menuContainer}>
          <li onClick={this.toggleMenu}>
            <Image src={CloseIcon} />
          </li>
          <li>
            <Link to="/about-empire">About Empire</Link>
          </li>
          <li>
            <Link to="/brokerage">Brokerage</Link>
          </li>
          <li>
            <Link to="/asset-management">Asset Management</Link>
          </li>
          <li>
            <Link to="/investment-banking">Investment Banking</Link>
          </li>
          <li>
            <Link to="/login">Account Login</Link>
          </li>
          <li>
            <Link to="/join-our-team">Join Our Team</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      )
  }
}

export default HamburgerMenu
