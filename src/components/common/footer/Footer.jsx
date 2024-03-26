import React from "react"
import "./footer.css"
// test
const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='container padding'>

          <div className='box logo'>

            <h1>FINWISE</h1>                
            <span>A financial guide, to be financially wise.</span>
            <ul>
              <li>
                <br></br>
                <a href="https://www.instagram.com/yorkfinwise/" target="_blank" rel="noopener noreferrer">
                <i className='fab fa-instagram icon'></i>
                Instagram
                </a>
              </li>
              <li>
                <img src="./images/logo/logo_YF2.png" alt="C4 Logo"  style={{ width: '120px', marginRight: '5px' }}   />                                              
              </li>
            
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Powered By:</h3>
            <ul>
              <li>
                {/* <i className='fa fa-map'></i> */}
                <img src="./images/logo/rbc-logo.png" alt="C4 Logo"  style={{ width: '250px', marginRight: '5px' }}   />
              </li>
    
              <li>
                {/* <i className='fa fa-paper-plane'></i> */}
                <img src="./images/logo/c4-logo.png" alt="C4 Logo"  style={{ width: '250px', marginRight: '5px' }}   />
              </li>
            </ul>
          </div>

  
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                4700 Keele Street, Toronto, ON Canada, M3J1P3
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                yorkfinwise@gmail.com</li>
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
