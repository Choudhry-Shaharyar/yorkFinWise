import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.971352403957!2d-79.50186839999999!3d43.77345349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd330b767bfb%3A0xdbb899cc9da76d19!2sYork%20University!5e0!3m2!1sen!2sca!4v1710890185547!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>4700 Keele St, Toronto, ON M3J 1P3</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>yorkfinwise@gmail.com</p>
              </div>
              {/* <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div> */}
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <a href ="https://www.instagram.com/yorkfinwise/" target="_blank">INSTAGRAM</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
