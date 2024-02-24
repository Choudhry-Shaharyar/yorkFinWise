import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>FINWISE</h1>
            <span>A financial guide, to be financially wise.</span>
            <p>                                                 </p>
            <a href="https://www.instagram.com/yorkfinwise/" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-instagram icon'></i>
            </a>
          </div>
          
          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                4700 Keele Street, Toronto, ON Canada, M3J1P3
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                (416) 736-2100
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@finwise.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This was made with <i className='fa fa-heart'></i> by YorkFinWise
        </p>
      </div>
    </>
  )
}

export default Footer
