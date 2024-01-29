import React from 'react'
import { Router } from "@reach/router"
import Banner from '../components/Images/Banner/Banner'

import banner1 from '../../assets/images/contact-us/mfg-contact_us-min.png'
import styles from './success-contact-us.module.less'

const ThankYouMessage = () => (
  <div default>
    <Banner src={banner1} />
    <div className={styles.section}>
      <h2 className={styles.submission}>Thank you for submission</h2>
    </div>
  </div>

);

const SuccessContactUs = () => {
  return (<div>
    <Router basepath="/success-contact-us">
      <ThankYouMessage path="/" />
    </Router>
  </div >);
}

export default SuccessContactUs
