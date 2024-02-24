import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO YORKU FINWISE' title='One stop shop for International Students@York' />
            <p>Here you can find financial information specific to York. Such as ways to save, upcoming events/workshops, budget calculators, scholarship qualifiers, and signing up for RBC cards! </p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
