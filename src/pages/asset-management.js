import React from 'react'
import Banner from '../components/Images/Banner/Banner'

import banner1 from '../../assets/images/asset-management/mfg-asset_management-min.png'

import styles from './asset-management.module.less'

const AssetManagement = () => (
  <div className={styles.assetManagementContainer}>
    <a id='FinancialPlanning' />
    <Banner src={banner1} caption='Personal Attention' />
    <div className={styles.callout}>
      Every investment plan is customized based on a thorough assessment of each client's unique goals, needs and appetite for risk while remaining cognizant of the changing market environment.
    </div>

    <div className={styles.stdContent}>
      <div className={styles.left}>
        <h4>Customized Solutions</h4>
        <div className={styles.section}>
          <p>Through our registered investment adviser affiliate, Empire Financial Management Company, we provide a full range of customized investment solutions leveraging the expertise of leading asset managers that control risk while maximizing potential for return. Every investment plan is customized based on a thorough assessment of each client’s unique goals, needs and appetite for risk while remaining cognizant of the changing market environment. In an investment world occupied by passive investing, we seek to deliver value added capabilities to those clients who seek to outperform their peer groups.</p>
        </div>
        <div className={styles.section}>
          <p>Our financial advisors are highly skilled in weighting of various asset categories and diversification in formulating a balanced investment plan to meet your investment objectives.</p>
        </div>
        <div className={styles.section}>
          <p>Our full range of options include:</p>
          <ul>
            <li>
              <p>Separately Managed Accounts</p>
            </li>
            <li>
              <p>Multi-Manager Accounts</p>
            </li>
            <li>
              <p>Unified Managed Accounts</p>
            </li>
            <li>
              <p>Mutual Fund Strategies</p>
            </li>
            <li>
              <p>ETF Strategies</p>
            </li>
            <li>
              <p>Alternative Investments</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <h4>Identifying Your Goals</h4>
        <div className={styles.section}>
          <p>Our investment process begins with an analysis of your needs and goals. A profile is developed that highlights your investment objectives, risk tolerance and investment time horizon. Once established, we will work together with you to define an investment plan tailored to your specific situation.</p>
        </div>
        <div className={styles.section}>
          <h4>Developing Your Investment Strategy</h4>
          <p>Our financial advisors will assist you in weighting of various asset categories (i.e., stocks, bonds, cash) as well as diversification of holdings to reduce risk and increase the security of your portfolio based on your personalized risk profile.</p>
        </div>
        <div className={styles.section}>
          <h4>Your Investment Plan</h4>
          <p>Through a careful evaluation and due diligence process that screens a broad array of investment possibilities, our financial advisors are able to present clients with some of the best investment managers who specialize in a broad range of asset classes. The selection of appropriate managers for your customized investment plan allows us to offer you a blended management and allocation strategy that best suits your needs.</p>
        </div>
        <div className={styles.section}>
          <h4>Monitoring Your Portfolio</h4>
          <p>Following your investment, your portfolio will be monitored on an ongoing basis to ensure that it remains on track to achieve the investment goals and objectives.  Additionally, our financial advisors stand ready to assist when market conditions or other factors may cause the allocations to deviate from the original plan.</p>
        </div>
      </div>
    </div>
  </div>
)

export default AssetManagement
