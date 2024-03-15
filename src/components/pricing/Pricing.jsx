import React from "react"
import Backtwo from "../common/back/Backtwo"
import PriceCard from "./PriceCard"
import ServicesContent from "./ServiceContent"
import Jobs from "./Jobs"
import "./price.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <Backtwo title='Welcome to York University' />
      <section className='price padding'>

        <ServicesContent />
        <div className="space">
        </div>
        <Jobs />
        <div className="space">
        </div>
        {/* <div className='container grid'>
          <PriceCard />
        </div> */}
      </section>
      {/* <Faq /> */}
    </>
  )
}

export default Pricing
