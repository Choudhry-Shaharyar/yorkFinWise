import React from "react"
import "./price.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Jobs = () => {
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            id="testt"
            style={{ ...style, display: "block", color: "red", fontSize: "40px"}}
            onClick={onClick}
          />
        );
      }
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            id="testt"
            style={{ ...style, display: "block"  }}
            onClick={onClick}
          />
        );
      }
    var settings = {
        dots: false,
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <>

<div className="container">
<div className="jobtitle">
    <h2> Featured Campus Jobs</h2>
</div>

<Slider {...settings}>
      <div className="jobsList" id="text2">
        <h3>Software Developer</h3>
        <p>York University English Language Institute (YUELI) </p>
        <p>Keele CampusOntario</p>
      </div>
      <div className="jobsList" id="text2">
      <h3>Software Developer</h3>
        <p>York University English Language Institute (YUELI) </p>
        <p>Keele CampusOntario</p>      </div>
      <div className="jobsList" id="text2">
      <h3>Software Developer</h3>
        <p>York University English Language Institute (YUELI) </p>
        <p>Keele CampusOntario</p>      </div>
      <div className="jobsList" id="text2">
      <h3>Software Developer</h3>
        <p>York University English Language Institute (YUELI) </p>
        <p>Keele CampusOntario</p>      </div>
      <div className="jobsList" id="text2">
      <h3>Software Developer</h3>
        <p>York University English Language Institute (YUELI) </p>
        <p>Keele CampusOntario</p>      </div>
      <div className="jobsList" id="text2">
      <h3>Software Developer</h3>
        <p>York University English Language Institute (YUELI) </p>
        <p>Keele CampusOntario</p>      </div>
</Slider>
</div>


    </>
  )
}

export default Jobs


