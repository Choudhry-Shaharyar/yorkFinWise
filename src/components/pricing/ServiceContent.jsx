import React from "react"
import "./price.css"
const ServiceContent = () => {
    const buttonStyle = {
        background: 'red',
        color: 'white',
        padding: '10px 20px',
        margin: '0 10px',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
      };
    
      const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      };
      const onButtonClick = () => {
        const pdfUrl = "./presentation.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "presentation-slides.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <>
    <div className="container">
    {/* <div className='content flex'>
          <div className='left'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/53QIU5RHPWQ?si=hjT83c0uTgU2kO1f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
          <div id='text'>
          <h1>Part 1: Understanding Income</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div> */}
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
           
            <button onClick={onButtonClick} style={buttonStyle}>
            Presentation Slides
            </button>
            <button onClick={onButtonClick} style={buttonStyle}>
            Financial Resource Guide
            </button>
            <button onClick={onButtonClick} style={buttonStyle}>
                    Scam Prevention
            </button>
        </div>
        </div>
       
    </div>

     <div className="space">
        
     </div>
   
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
           
            <button onClick={onButtonClick} style={buttonStyle}>
                Renting Tips 
            </button>
            <button onClick={onButtonClick} style={buttonStyle}>
                Off-Campus Housing
            </button>
            <button onClick={onButtonClick} style={buttonStyle}>
              Living in Canada - What to Expect 
            </button>
        </div>
        </div>
        {/* https://yorkinternational.yorku.ca/new-students/online-info-sessions/ */}
       
    </div>
       
    </div>

    </>
  )
}

export default ServiceContent


