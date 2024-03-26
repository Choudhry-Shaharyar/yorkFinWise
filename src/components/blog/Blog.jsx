import React from "react";
import Backfour from "../common/back/Backfour";
import "./blog.css";
import CreditCard from './CreditCard';

const Blog = () => {
  const cards = [
    {
      cardName: 'RBC ION Visa',
      link: 'https://www.rbcroyalbank.com/credit-cards/rewards/rbc-ion-visa.html',
      highlights: '',
      features: [
        'No annual fee',
        'Enjoy 3,500 Welcome Avion points upon approval.',
        'Earn 1.5X Avion points for every $1 spent on selected categories.'
      ],
      fees: [
        { label: 'Annual Fee', value: '$0' },
        { label: 'Purchase Rate', value: '20.99%' },
        { label: 'Additional Card', value: '$0' },
        { label: 'Cash Advance Rate', value: '22.99%' }
      ],
      imgSrc: './images/rbcCard2.png' // Update with the actual path to your image
    }, {
      cardName: 'RBC ION+ Visa',
      link: 'https://www.rbcroyalbank.com/credit-cards/rewards/rbc-ion-plus-visa.html',
      highlights: 'Most Popular',
      features: [
        'Get 3,500 Welcome Points and earn 3,500 bonus points when you spend $500 in your first 3 months.',
        'Earn 3X Avion points for every $1 spent on selected categories.',
        'Annual Fee rebated every month for students with eligible accounts.'
      ],
      fees: [
        { label: 'Annual Fee', value: '$48' },
        { label: 'Purchase Rate', value: '20.99%' },
        { label: 'Additional Card', value: '$0' },
        { label: 'Cash Advance Rate', value: '22.99%' }
      ],
      imgSrc: './images/rbcCard1.png' // Update with the actual path to your image
    },
    {
      cardName: 'RBC Cash Back Mastercard',
      link: 'https://www.rbcroyalbank.com/credit-cards/cash-back/rbc-cashback-mastercard.html',
      highlights: '',
      features: [
        'No annual fee',
        'Unlimited cashback and up to 2% back on groceries',
        'Purchase security and extended warranty protection'
      ],
      fees: [
        { label: 'Annual Fee', value: '$0' },
        { label: 'Purchase Rate', value: '20.99%' },
        { label: 'Additional Card', value: '$0' },
        { label: 'Cash Advance Rate', value: '22.99%' }
      ],
      imgSrc: './images/rbcCard3.png' // Update with the actual path to your image
    }

  ];

  return (
    <>
      <Backfour title='On-Campus Banking' />
      {/* <div className="space3"></div> */}

      <section className='blog padding'>

        <div className="rbc-container">

          <div className="ilonaPicture"></div>
          <div className="blogBackground"></div>
          <div className="rbcBranch"></div>
          <h1><a href="https://www.linkedin.com/in/ilona-lupa-15545b119/" target="_blank">Meet Ilona!</a> <p>A York University alumni and a friendly face at the local branch. Come visit her Monday to Friday from 9:30am to 5pm. Click on her name to connect!</p></h1>
          <h1>Information About the Branch
            <p>Located in the Quad, this specialized team of student-focused financial advisors helps students balance books, life and a budget. They are currently available to help students attending any school across Canada, virtually or by phone, and offer regular webinars on topics relevant to students, their money, and their life after school. They can help youth access career advice, networking and skill-building opportunities and connect them to relevant work experience and mentorship programs through RBC Future Launch. Whether you're looking for sound advice, budgeting tips or access to mental health resources, we'll help you with life on and off campus.
            </p>
            <h1>Services the Branch Offers</h1>
            <p><ul>
              <li>🔹With assistance from our advisors, complete everyday banking transactions through digital channels, including the ATM.</li>
              <li>🔹Full suite of products and advice.</li>
              <li>🔹Cash available through ATMs (including USD). See nearby branches for night deposit, coin & foreign currency.</li>
              <li>🔹Languages: English and French</li></ul></p></h1>
          <h1>
            Address <p>95 The Pond Rd-Unit 35, NORTH YORK, ON</p>
            <h1>Transit #</h1> <p>3481</p>
            <h1>Phone Number</h1> <p>416-661-0684</p>
            <h1>Hours</h1> <p>
              <li>Monday	9:30 AM - 5:00 PM</li>
              <li>Tuesday	9:30 AM - 5:00 PM</li>
              <li>Wednesday	9:30 AM - 5:00 PM</li>
              <li>Thursday	9:30 AM - 5:00 PM</li>
              <li>Friday	9:30 AM - 5:00 PM</li>
              <li>Saturday	Closed</li>
              <li>Sunday	Closed</li></p>
          </h1>

        </div>
        <div className="space"></div>

        <div className="spotlight-cards">
          <h1>RBC Spotlight: Credit Cards</h1>
          <h2>Why use a Credit Card?</h2>
          <p>Credit cards afford you a number of important benefits that you don't get when paying with either cash or personal cheques. A credit card provides a convenient and secure way to shop, budget and manage your financial resources. You can use your card to make purchases, manage your day-to-day cash flow through cash advances, and to access a variety of personal accounts through online banking and Automatic Teller Machines (ATM). When you use a credit card for everyday purchases, you don't need to carry a large amount of cash or provide the additional methods of identification necessary to pay with a cheque. In addition, a credit card is virtually the only way to make online purchases.</p>
          <h3>Insurance coverages</h3>
          <p>Most credit cards come with at least basic coverage while some fee-based cards come with an extensive list of valuable insurance coverages. All RBC Royal Bank credit card cardholders enjoy Purchase Security and Extended Warranty Insurance, while, depending upon the card you choose, you can also access the security of additional insurance protection like Out-of-Province/Out-of-Country Emergency Medical Insurance coverage and more.</p>
          <h3>Credit rating</h3>
          <p>Developing a positive credit rating through the responsible use of a credit card is an asset, not only when you apply for a credit card, but also when you apply for a job, insurance coverage, or car or home financing. Remember that a bad credit rating can follow you for seven years. The best way to ensure a positive credit rating is to pay your bills on time and, whenever possible, pay more than the minimum balance due on your card. This will assure future lenders that you are a good credit risk.</p>
          <h3>Earn points and redeem for rewards</h3>
          <p>Depending on the credit card you choose, you can also earn points toward travel or merchandise with every dollar you spend. For instance, certain RBC Royal Bank credit cards offer the discerning traveller a range of rewarding choices, from unrestricted travel dates to selecting from a variety of airlines, including Air Canada. In addition, many cards provide money-saving partner discounts and special savings at a host of the country's best retailers. <a href="https://www.avionrewards.com/index.html" target="_blank">Learn about Avion Points here!</a></p>
          <h3>Worldwide acceptance</h3>
          <p>Your credit card can make travelling hassle-free. RBC credit card is accepted across Canada and worldwide which means that you'll never have to worry about having a ready supply of foreign currency on hand.</p>
          <h1>Ilona's RBC Student Credit Card Recommendations</h1>
        </div>

        <div className="recCard">
          <div className="cardContainer">
            {cards.map((card, index) => (
              <CreditCard
                key={index}
                cardName={card.cardName}
                highlights={card.highlights}
                features={card.features}
                fees={card.fees}
                imgSrc={card.imgSrc}
                link={card.link}
              />
            ))}
          </div>
        </div>
        <div className="space"></div>
        <hr></hr>
        <div className="space"></div>

        <div className="bmo-container">
          <div className="bmo-logo"></div>
          <div className="bmoBranch"></div>

          <h1> Information About the Branch
            <p>
              <ul>
                <li>🔹Full Service Branch</li>
                <li>🔹ATM</li>
                <li>🔹ATM Bill Mix</li>
                <li>🔹Wheelchair Access</li>
                <li>🔹Safety Deposit Box</li>
                <li>🔹Language: English, Mandarin, Vietnamese</li></ul>

            </p>
            <div className="meet-expert">
            <h2>Meet with an Expert</h2>
    <p>Need to speak to someone about your personal or small business banking needs? In a few easy steps you can book your appointment online and choose the date, time and branch location that works best with your schedule.</p>
    <a href="https://www.bmo.com/oab/start?_lang=en" target = "_blank" className="book-appointment-btn">Book an appointment</a></div>
          </h1>
          <h1>
            Address
            <p>4700 Keele Street Toronto, ON M3J 1P3</p>
            <h1>Transit #</h1>
            <p>38512</p>
            <h1>Phone Number</h1>
            <p>416-665-477</p>
            <h1>Hours</h1> <p>
              <li>Monday	9:30 AM - 5:00 PM</li>
              <li>Tuesday	9:30 AM - 5:00 PM</li>
              <li>Wednesday	9:30 AM - 5:00 PM</li>
              <li>Thursday	9:30 AM - 5:00 PM</li>
              <li>Friday	9:30 AM - 5:00 PM</li>
              <li>Saturday	Closed</li>
              <li>Sunday	Closed</li></p>
          </h1>



        </div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <hr></hr>
        <div className="space"></div>
        <div className="alterna-container">
          <div className="alterna-logo"></div>
          <div className="alternaBranch"></div>
          <h1>Information About the Branch
            <p><ul>
              <li>🔹ATM</li>
              <li>🔹Financial Planning</li>
              <li>🔹Administration</li>
              <li>🔹Insurance</li>
              <li>🔹Mortgages and Lending </li>
              <li>🔹Personal & Business Financial Services</li>
              <li>🔹Contact Centre</li>
              <li>🔹Commercial Lending</li>
              <li>🔹Investing</li>
              <li>🔹Foreign Exchange</li></ul></p>
          </h1>
          <h1>
            Address
            <p>York Lanes Mall, 80 York Blvd, Unit 18, North York ON M3J 1P3</p>
            <h1>Phone Number</h1>
            <p>416-213-7973</p>
            <h1>Hours</h1> <p>
              <li>Monday	10:00 AM - 5:00 PM</li>
              <li>Tuesday	10:00 AM - 5:00 PM</li>
              <li>Wednesday	10:00 AM - 5:00 PM</li>
              <li>Thursday	10:00 AM - 5:00 PM</li>
              <li>Friday	10:00 AM - 5:00 PM</li>
              <li>Saturday	Closed</li>
              <li>Sunday	Closed</li></p>
          </h1>

        </div>



        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
   

      </section>


    </>
  );
}

export default Blog;
