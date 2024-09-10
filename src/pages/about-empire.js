import React from 'react'
import Buttons from '../components/Buttons/Buttons'
import Banner from '../components/Images/Banner/Banner'
import Image from '../components/Images/Image'

import banner1 from '../../assets/images/about/mfg-about_empire-1-min.png'
import banner2 from '../../assets/images/about/mfg-about_empire-2-min.png'
import partner2 from '../../assets/images/about/MSRB-Logo-min.png'
import partner3 from '../../assets/images/about/SIPC-Logo-min.png'

import styles from './about-empire.module.less'

const Partner = ({ name, src, children }) => (
  <div className={styles.partner}>
    {
      src && <div className={styles.logo}>
        <Image src={src} />
      </div>
    }
    <div className={styles.text}>
      <h4>{name}</h4>
      <p>{children}</p>
    </div>
  </div>
)

const AboutEmpire = () => (
  <div className={styles.pageContainer}>
    <Buttons
      x={{ label: 'Our Philosophy', location: '#OurPhilosophy' }}
      y={{ label: 'Relationships Matter', location: '#RelationshipsMatter' }}
    />
    <a id='OurPhilosophy' className={styles.topAnchor} />
    <Banner src={banner1} caption='Clients Come First.' />
    <div className={styles.callout}>We offer a wide range of financial services to institutional and private clients seeking value-added capabilities in brokerage, asset management, research and capital market transactions.</div>
    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <h4>People</h4>
          <p>Led by an executive team of Wall Street veterans, our team of financial professionals work closely to innovate and implement effective, goal-focused non-conflicted solutions to our customers.</p>
        </div>
        <div className={styles.section}>
          <h4>Background</h4>
          <p>Empire Asset Management Company is a family-owned full-service financial services company. We focus on providing private investors and active portfolio managers, high quality comprehensive investment solutions. Empire serves thousands of diverse clients across the U.S. and abroad. Our philosophy that clients come first has been a key part of our success, then and now.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <h4>Capabilities</h4>
          <p>Empire offers comprehensive brokerage solutions to support both private and institutional investors with our non-conflicted trading and execution services. As an asset manager we provide certified financial planning, insurance and retirement solutions. Our Private Client Service team help clients take advantage of alternative investment opportunities, with emphasis on risk management, global diversification, and customized portfolio modeling. Companies and institutions can reach a wider spectrum of investors through our investment banking expertise and capital market transactions.</p>
        </div>
      </div>
    </div>
    <a id='RelationshipsMatter' />
    <Banner src={banner2} caption='Rock Solid Relationships' />
    <div className={styles.callout}>At Empire, we are committed to a distinctive way of doing business and an unshakable emphasis on long-term client relationships.</div>
    <div className={styles.stdContent}>
      <div className={styles.left}>
        <div className={styles.section}>
          <p>At Empire, we are committed to a distinctive way of doing business and an unshakable emphasis on long-term client relationships. We promise a personalized experience in serving our clients best interests based on their unique needs and objectives. Our goal is to provide a sound investment plan by employing an objective driven practice where we get to really know and understand our clients’ financial commitments, circumstances, needs and objectives in order to select the most suitable solutions to help achieve their investment goals.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <p>Our commitment does not end with an investment. Our financial professionals are dedicated to the progress of each portfolio and to ensure that clients’ understand how they are tracking toward their goals. Through attentive service and reliable access, we work hard to make sure that our clients experience a high-touch service that is responsive to their evolving needs. Like a financial concierge, we go beyond investment services to become a complete solution for our clients. We want Empire Asset Management Company to be the kind of place where the CEO knows you, the receptionist recognizes your voice, and you feel you’ve found a partner.</p>
        </div>
      </div>
    </div>
    <div className={styles.stdContent}>
      <a className={styles.brochure} href='https://online.anyflip.com/bmxr/ihbq/index.html' target='_blank'>Click here to review our brochure.</a>
    </div>
    <div className={styles.stdContent}>
      <p className={styles.disclaimer}>
        *For more information relating to Firm disclosures and our Customer Relationship Summary (CRS) please visit “Client’s Rights and Protections” on our website.
      </p>
    </div>
  </div>
)

export default AboutEmpire
