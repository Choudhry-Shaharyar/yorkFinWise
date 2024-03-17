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
    <h1> Featured On-Campus Jobs</h1>
</div>
<p>International students may work on campus at York with their study permit if they are full time students in a degree/diploma/certificate program. The study permit must be valid and have a condition authorizing the student to work on campus. Please note:
There is no time limit for On-Campus work.
A Social Insurance Number (SIN) is required.
Detailed information from Immigration Canada can be found here.  If you are looking for an on campus job, a way to get involved, or an opportunity to improve your leadership skills, be sure to check out the 'Work at YI' page <a href="https://yorkinternational.yorku.ca/yi-jobs/#:~:text=work/study%20positions.-,Available%20Positions,-Click%20on%20each" target="_blank">here</a>.</p>
<Slider {...settings}>
      <div className="jobsList" id="text2">
        <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=9651" target="_blank">
        <h3>Parking Facilities Assistant</h3>
        <p>Parking Operations Services</p>
        <p>Keele Campus</p>
        </a>
      </div>

      <div className="jobsList" id="text2">
      <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=10004" target="_blank">
      <h3>Social Media Assistant</h3>
        <p>Office of the Dean, Graduate Studies</p>
        <p>Keele Campus</p>      
        </a>
      </div>

      <div className="jobsList" id="text2">
      <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=9627" target="_blank">
      <h3>Summer Camp Counsellor</h3>
        <p>Athletics and Recreation</p>
        <p>Keele Campus</p>      
        </a>
      </div>

      <div className="jobsList" id="text2">
      <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=9663" target="_blank">
      <h3>Bilingual Library Assistant</h3>
        <p>Collections Maintenance Library</p>
        <p>Glendon</p>  
      </a>    
        </div>

      <div className="jobsList" id="text2">
      <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=9846" target="_blank">
      <h3>Summer Library Assistant</h3>
        <p>Collections Maintenance Library</p>
        <p>Keele Campus</p>  
      </a>    
        </div>

      <div className="jobsList" id="text2">
      <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=9699" target="_blank">
      <h3>Digital Support Summer Assistant</h3>
        <p>Digital Engagement Library</p>
        <p>Keele Campus</p>      
      </a>
      </div>
</Slider>
</div>


    </>
  )
}

export default Jobs


