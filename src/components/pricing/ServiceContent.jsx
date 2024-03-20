import React from "react"
import "./price.css"
import Presentation  from "../../resourcesPDF/Presentation.pdf"
import Presentation2  from "../../resourcesPDF/Be-Aware-of-Scams.pdf"
import Presentation3  from "../../resourcesPDF/Financial-Resource-Guide.pdf"
import Presentation4  from "../../resourcesPDF/Living-in-Canada-What-to-Expect.pdf"
import Presentation5  from "../../resourcesPDF/Off-Campus-Housing-Resources.pdf"
import Presentation6  from "../../resourcesPDF/Tips-for-Renting-in-Ontario.pdf"



const ServiceContent = () => {
  const buttonStyle = {

  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    marginTop: '20px',
  };
  const onButtonClick = () => {
  };
  return (
    <>
      <div className="servicecontent">
      <div className="container">
      <div className="space4"></div>

        <h1>Financial Planning for International Students</h1>
        <p>
          Understanding the financial aspect of studying abroad is crucial for international students. This includes preparing for the general cost of life in Canada, which encompasses:
        </p>
        <div className='content flex'>
          <div className='left'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VfExAhP4x00?si=PEtOAWbI9sq7z6oK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div id='text'>
            <p>The general cost of life in Canada, including cost of studies, living expenses, and more.
              The various kinds of financial aid that are available to international students, such as scholarships, awards, and bursaries.
              Resources available to students to support their financial planning, such as budgeting resources, student discounts, and more.</p>
            <div style={containerStyle}>
              {/* <a href="./files/presentation-slides.pdf"  donwload="presentation-slides">Presentation Slides</a>
            <a href="/path-to-resource/financial-resource-guide.pdf" target="_blank" style={buttonStyle}>Financial Resource Guide</a>
            <a href="/path-to-resource/be-aware-of-scams.pdf" target="_blank" style={buttonStyle}>Be Aware of Scams</a> */}
              <a href={Presentation} id="buttonStyle" target="_blank">
                Presentation Slides
              </a>
              <a href={Presentation3} id="buttonStyle" target="_blank">
                Financial Resource Guide
              </a>
              <a href={Presentation2} id="buttonStyle" target="_blank">
                Scam Prevention
              </a>
    

            </div>
          </div>
        </div>

        <div className="space"></div>

        <h1>
          Living in Canada: What to Expect
        </h1>
        <div className='content flex'>
          <div className='left'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/B29FzbEamGA?si=vCjJHDN2TGDqeCMR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div id='text'>
            <p>The various housing and accommodation options available to international students at York University, including housing application process and important deadlines.
              The holistic benefits of living in residence as a first-year student.
              Identify alternate residence options other than on-campus housing.</p>
            <div style={containerStyle}>
              {/* <a href="./files/presentation-slides.pdf"  donwload="presentation-slides">Presentation Slides</a>
            <a href="/path-to-resource/financial-resource-guide.pdf" target="_blank" style={buttonStyle}>Financial Resource Guide</a>
            <a href="/path-to-resource/be-aware-of-scams.pdf" target="_blank" style={buttonStyle}>Be Aware of Scams</a> */}
              <a href={Presentation6} id="buttonStyle" target="_blank">
                Renting Tips
              </a>
              <a href={Presentation5} id="buttonStyle" target="_blank">
              Off-Campus Housing
              </a>
              <a href={Presentation4} id="buttonStyle" target="_blank">
              Living in Canada - What to Expect
              </a>
              
             
            </div>
          </div>
          {/* https://yorkinternational.yorku.ca/new-students/online-info-sessions/ */}
        </div>
      </div>
      </div>
      

    </>
  )
}

export default ServiceContent


