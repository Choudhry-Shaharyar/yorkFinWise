import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>FINWISE</h1>
            <span>A financial guide, to be financially wise.</span>
          </div>

          <div className='social'>
            <a href="https://www.instagram.com/yorkfinwise/" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-instagram icon'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
