import React from "react"
import "./jobs.css"
import ScholarshipsTable from "./ScholarshipsTable";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Jobs = () => {
  const scholarships = [
    { 
      title: "President’s International Scholarship of Excellence", 
      link: "https://sfs.yorku.ca/scholarships/award-search?awardID=4849", 
      description: "Twenty (20) of these scholarships are awarded per year, valued at $45,000/year. It is renewable for an additional three years of full-time undergraduate study if the student maintains good academic standing each year, bringing it to a total of $180,000 over four years.",
      amount: "$180,000 ($45,000 x 4 years)"
    },
    { 
      title: "Tentanda Via Award", 
      link: "https://sfs.yorku.ca/scholarships/award-search?awardID=4881", 
      description: "Fifteen (15) of these awards are awarded per year, valued at $30,000/year. It is renewable for an additional three years of full-time undergraduate study if the student maintains good academic standing each year, bringing it to a total of $120,000 over four years.",
      amount: "$120,000 ($30,000 x 4 years)"
    },
    { 
      title: "Global Leader of Tomorrow Award for International Students", 
      link: "https://sfs.yorku.ca/scholarships/award-search?awardID=0966", 
      description: "Two (2) of these scholarships are awarded per year, valued at $20,000/year. It is renewable for an additional three years of full-time undergraduate study if the student maintains high academic standing each year, bringing it to a total of $80,000 over four years.",
      amount: "$80,000 ($20,000 x 4 years)"
    },
    { 
      title: "International Circle of Scholar’s Scholarship", 
      link: "https://sfs.yorku.ca/scholarships/award-search?awardID=0977", 
      description: "One (1) of these scholarships is awarded per year, valued at $15,000. It is for $15,000 towards a student’s first year of study.",
      amount: "$15,000"
    },
    { 
      title: "York University Academic Excellence Scholarships for International Students", 
      link: "https://sfs.yorku.ca/scholarships/award-search?awardID=3797", 
      description: "Five (5) to 10 of these scholarships are awarded per year, valued at $5,000 to $10,000. It is for $5,000 to $10,000 towards a student’s first year of study.",
      amount: "$5,000-10,000"
    },
    { 
      title: 'Liberal Arts & Professional Studies International Undergraduate Leadership Scholarships', 
      link: 'https://www.yorku.ca/laps/students/international/awards/', 
      description: '($10,000 x 4 years)\nFor Liberal Arts & Professional Studies applicants and requires an application.\nApplication Deadline: TBD\nSubmit the Liberal Arts & Professional Studies International Students Scholarship application.', 
      amount: '$40,000' 
    },
    { 
      title: 'Liberal Arts & Professional Studies International Student Entrance Scholarship', 
      link: 'http://sfs.yorku.ca/scholarships/award-search?awardID=3861', 
      description: 'For Liberal Arts & Professional Studies applicants\nNo award application required', 
      amount: '$2,000' 
    },
    { 
      title: 'Faculty of Health International Student Entrance Scholarship of Excellence', 
      link: 'https://sfs.yorku.ca/scholarships/award-search?awardID=5121', 
      description: 'For Faculty of Health applicants\nNo award application required', 
      amount: '$2,000' 
    },
    { 
      title: 'Glendon International Excellence Scholarship', 
      link: 'https://sfs.yorku.ca/scholarships/award-search?awardID=4887', 
      description: 'For Glendon applicants and requires an application.\nApplication Deadline: February 15\nSubmit the Glendon International Students Scholarship application package.', 
      amount: '$40,000\n($10,000 x 4 years)' 
    },
    { 
      title: 'Glendon International Scholarship', 
      link: 'https://sfs.yorku.ca/scholarships/award-search?awardID=4537', 
      description: 'For Glendon applicants and requires an application.\nApplication Deadline: February 15\nSubmit the Glendon International Students Scholarship application package.', 
      amount: '$5,000-$10,000' 
    },
    { 
      title: 'Faculty of Science Entrance Scholarship', 
      link: 'http://sfs.yorku.ca/scholarships/award-search?awardID=3941', 
      description: 'For Faculty of Science applicants\nNo award application required', 
      amount: '$2,000' 
    },
    { 
      title: 'York Science Scholars Award', 
      link: 'http://sfs.yorku.ca/scholarships/award-search?awardID=4429', 
      description: 'For Faculty of Science applicants and requires an application\n$5,000 as an entrance scholarship + $5,000 as a guaranteed summer research position following the first year of study\nApplication Deadline: TBD\nFor more information - York Science Scholars Award (YSSA)', 
      amount: '$10,000' 
    },
    { 
      title: 'The Annie Demirjian’77 Scholarship', 
      link: 'https://sfs.yorku.ca/scholarships/award-search?awardID=4566', 
      description: 'For Glendon applicants and requires an application.\nApplication Deadline: February 15\nSubmit the Glendon International Students Scholarship application package.', 
      amount: '$5,000-10,000' 
    },
    { 
      title: 'York University Talent Entrance Scholarships', 
      link: 'http://sfs.yorku.ca/scholarships/award-search?awardID=0066', 
      description: 'For applicants to programs in the School of the Arts, Media, Performance & Design (AMPD)\nNo award application required', 
      amount: '$1,000' 
    },
    { 
      title: 'Lassonde Entrance Scholarships', 
      link: 'http://sfs.yorku.ca/scholarships/award-search?awardID=3940', 
      description: 'For Lassonde school of Engineering applicants\nNo award application required', 
      amount: '$2,000' 
    }
  ];
  

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        id="testt"
        style={{ ...style, display: "block", color: "red", fontSize: "40px" }}
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
        style={{ ...style, display: "block" }}
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
        <div className="space">
        </div>
        <div className="jobtitle">
          <h1> Featured On-Campus Jobs</h1>
        </div>
        <p>International students may work on campus at York with their study permit if they are full time students in a degree/diploma/certificate program. The study permit must be valid and have a condition authorizing the student to work on campus. Please note:
          There is no time limit for On-Campus work.
          A Social Insurance Number (SIN) is required.
          Detailed information from Immigration Canada can be found here.  If you are looking for an on campus job, a way to get involved, or an opportunity to improve your leadership skills, be sure to check out the 'Work at YI' page <a href="https://yorkinternational.yorku.ca/yi-jobs/#:~:text=work/study%20positions.-,Available%20Positions,-Click%20on%20each" target="_blank">here</a>.</p>
        <div className="space">
        </div>
        <Slider {...settings}>
          <div className="jobsList" id="text2">
            <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=9651" target="_blank">
              <h3>Parking Facilities Assistant</h3>
              <div className="jobText">
                <p>Parking Operations Services</p>
                <p>Keele Campus</p>
              </div>
            </a>
          </div>

          <div className="jobsList" id="text2">
            <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=10004" target="_blank">
              <h3>Social Media Assistant</h3>
              <div className="jobText">
                <p>Office of the Dean, Graduate Studies</p>
                <p>Keele Campus</p>
              </div>
            </a>
          </div>

          <div className="jobsList" id="text2">
            <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=9627" target="_blank">
              <h3>Summer Camp Counsellor</h3>
              <div className="jobText">
                <p>Athletics and Recreation</p>
                <p>Keele Campus</p>
              </div>
            </a>
          </div>

          <div className="jobsList" id="text2">
            <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=9663" target="_blank">
              <h3>Bilingual Library Assistant</h3>
              <div className="jobText">
                <p>Collections Maintenance Library</p>
                <p>Glendon</p>
              </div>
            </a>
          </div>

          <div className="jobsList" id="text2">
            <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=9846" target="_blank">
              <h3>Summer Library Assistant</h3>
              <div className="jobText">
                <p>Collections Maintenance Library</p>
                <p>Keele Campus</p>
              </div>
            </a>
          </div>

          <div className="jobsList" id="text2">
            <a href="https://jobs-ca.technomedia.com/yorkuniversity/?_4x1F8B08000000000000FF5D8FB16EC3201445BFA68CD1030C9881A5B51D798E981131A4227500019692BF6F542543BD9F7B746E4E79760A502ACE17E5EFED834DB5D9D29C6D1E2D765D7DD9B6E014A61400736938ED65D713C3350103987040F5C73F8E3E0E8FF80FEB31ED0DD6EC4DA5D2D4309EBED05E28014018DA69F94273498BAF756EFEA6F27366D7C3359D73AA2DC4EFC3151340255917B7DBF959BD4BEB8CD0E4250A3134ADE761C7086198EEDE5DF745A5CBC597E0FE9E280982F311180398301E0517A324584C23FB246CEAD82F4C3347C634010000&offerid=9699" target="_blank">
              <h3>Digital Support Summer Assistant</h3>
              <div className="jobText">
                <p>Digital Engagement Library</p>
                <p>Keele Campus</p>
              </div>
            </a>
          </div>
        </Slider>

        <div className="space"></div>

        <div className="jobtitle">
          <h1>Scholarships</h1>
          <p>
          York University offers a variety of scholarships and awards that recognize academic excellence, resilience and community leadership. Some financial awards require that you submit an application for consideration, while other entrance awards are automatically assessed and awarded at the time of your admission.
          </p>
        </div>
        <div className="space3"></div>

        <div>
         < ScholarshipsTable scholarships={scholarships} />
        </div>

       
  


        <div className="space"></div>

        <div className="jobtitle">
          <h1>Tips</h1>
        </div>

        <div className="space"></div>

        


      </div>


    </>
  )
}

export default Jobs


