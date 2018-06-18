import React from 'react'
import Link from 'gatsby-link'
import ButtonGroup from '../components/Buttons/ButtonGroup'
import Content from '../components/ClientsRights/Reporting'

import styles from './clients-rights.module.less'

const Reporting = () => (
  <div className={styles.clientsRightsContainer}>
    <ButtonGroup
      a={{ label: 'Clients Rigths & Protections', to: '/clients-rights', isActive: false }}
      b={{ label: 'Business Continuity Plan', to: '/business-continuity-plan', isActive: false }}
      x={{ label: 'Privacy Policy', isActive: false }}
      y={{ label: '606 Reporting', isActive: true }}
    />
    <div className={styles.stdContent}>
      <Content />
    </div>
  </div>
)

export default Reporting