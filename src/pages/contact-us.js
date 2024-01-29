import React, { Component } from 'react'
import Banner from '../components/Images/Banner/Banner'

import banner1 from '../../assets/images/contact-us/mfg-contact_us-min.png'

import styles from './contact-us.module.less'

// email field validation
const VALID_EMAIL_PATTERN = /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+\w$)/
const isValidEmail = value => {
  return VALID_EMAIL_PATTERN.test(value)
}

class ContactUs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEmailValid: false,
      emailInput: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleChange (e) {
    const emailInput = e.target.value

    if (isValidEmail(emailInput)) {
      this.setState({
        isEmailValid: true,
        emailInput
      })
    } else {
      this.setState({
        isEmailValid: false,
        emailInput
      })
    }
  }

  // not working in IE11, perhaps with 'onClick' polyfill?
  handleReset (e) {
    e.preventDefault()

    document.getElementById('contact-form-v2').reset()

    this.setState({
      isEmailValid: false,
      emailInput: ''
    })
  }
  
  render () {
    const { isEmailValid, emailInput } = this.state

    return (
      <div className={styles.contactUsContainer}>
        <Banner src={banner1} caption='Build With Us.' />

        <div className={styles.stdContent}>
          <div className={styles.left}>
            <h2>Email Us</h2>
            <p>To find out if a relationship with Empire is right for you, please contact us today.</p>
            <form
              id='contact-form-v2'
              name='contact'
              method='POST'
              data-netlify='true'
              data-netlify-recaptcha='true'
              action='/contact-us'
            >
              <div className={styles.section}>
                <div className={styles.field}>
                  <label htmlFor='name'>Full Name</label>
                  <input id='name' name='name' type='text' />
                </div>

                <div className={styles.field}>
                  <label htmlFor='company'>Company</label>
                  <input id='company' name='company' type='text' />
                </div>

                <div className={styles.field}>
                  <label htmlFor='email'>Email Address</label>
                  <input id='email' name='email' type='email' value={emailInput} onChange={this.handleChange} />
                </div>


                <div className={styles.field}>
                  <label htmlFor='questions-comments'>Questions / Comments</label>
                  <textarea id='questions-comments' name='questions-comments' />
                </div>

                <div className={styles.field}>
                  <p className={styles.recaptcha}>Please check reCAPTCHA box before clicking Submit.</p>
                </div>

                <div data-netlify-recaptcha='true'></div>

                <div className={styles.field}>
                  <button
                    className={isEmailValid ? styles.submit : styles.disabled}
                    type='submit'
                    disabled={!isEmailValid}
                    title='Please submit with a valid email address'
                  >
                    Submit
                  </button>
                  <button type='button' className={styles.clear} onClick={this.handleReset}>Clear</button>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <h2>Our Office</h2>
            <div className={styles.map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5385267733996!2d-74.01589668459518!3d40.70615997933263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a173d1b444d%3A0x7775ebc6ec42bcd0!2sEmpire+Asset+Management!5e0!3m2!1sen!2sus!4v1527069949906" width="588" height="300" frameBorder="0" style={{ border: '0' }} allowFullScreen></iframe>
            </div>
            <div className={styles.section}>
              <div className={styles.address}>
                <div>
                  <label>Address:</label>
                  <p>29 Broadway</p>
                  <p>12th Floor</p>
                  <p>New York, NY 10006</p>
                </div>
                <div>
                  <label>Phone:</label>
                  <p>888.417.8050</p>
                  <p>212.417.7777</p>
                </div>
                <div>
                  <label>Email:</label>
                  <p><a href='mailto:info@empiream.com'>info@empiream.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs
