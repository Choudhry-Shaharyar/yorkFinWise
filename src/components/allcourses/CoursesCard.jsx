import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Eventcalendar, getJson, Toast, setOptions } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import "./courses.css"

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

const CoursesCard = () => {

  const [myEvents, setEvents] = useState([
    {
      id: 'event-1', // Use a unique ID for the event
      title: 'Building Good Student Credit',
      start: new Date('2024-03-26T00:00:00'), // set to start of the day
      end: new Date('2024-03-1926T23:59:59'), // set to end of the day
    },
    {
      id: 'event-2', // Use a unique ID for the event
      title: 'Budgeting 101',
      start: new Date('2024-03-19T00:00:00'), // set to start of the day
      end: new Date('2024-03-19T23:59:59'), // set to end of the day
    }
  ]);

  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState('');

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleEventClick = useCallback((event) => {
    const eventDate = new Date(event.event.start);
    if (eventDate.getDate() === 19 && eventDate.getMonth() === 2) { // for March 19
      window.open('https://services.rbc.com/EventRegistration/?en&event=13505', '_blank');
    } else if (eventDate.getDate() === 26 && eventDate.getMonth() === 2) { // for March 26
      window.open('https://services.rbc.com/EventRegistration/?en&event=13506', '_blank');
    }
    else {
      setToastText(event.event.title);
      setToastOpen(true);
    }
  }, []);


  const myView = useMemo(() => ({ calendar: { labels: true } }), []);

  return (
    <>
      <div className="container">
        <div className="space4"></div>

        <h1 id='titleVideo'>Financial Literacy Series
        </h1>
        <p>
          Learning financial literacy will enable you to better understand your lifestyle and set you up for success. It can really change your life forever. Take a look at our five part series to make sense of your money. Take a look at this series to make sense of your money.
        </p>
        <div className="space">
        </div>
        <div className='content flex'>
          <div className='left'>
            <iframe src="https://eclasss.h5p.com/content/1292220585480380158/embed" aria-label="It All Adds Up to Making Cents: Understanding Income" width="560" height="410" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://eclasss.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script></div>
          <div id='text'>
            <h1>Part 1: Understanding Income</h1>
            <p>Learn the different ways you can make money and what they mean as you start looking for jobs and building your career. This video highlights the concept of understanding incomes via formal and informal work. While emphasizing the differences between having a regular and irregular income. It is important to understand their differences and similarities to find the best fitting options for you. </p>
          </div>
        
        </div>


        <div className="space2"></div>

        <div className=' videocontent'>
          <div className='content flex'>
            <div id='left'>
              <iframe src="https://eclasss.h5p.com/content/1292220589934900958/embed" aria-label="It All Adds Up to Making Cents: Spending Money" width="560" height="410" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://eclasss.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script></div>
            <div id='text'>
              <h1>Part 2: Spending Money</h1>
              <p>The video emphasizes the significance of saving money, acknowledging that while the concept is commonly known, the practice can be challenging. It outlines practical steps for effective saving: understanding personal spending, budgeting to track income and outgoings, utilizing tools like online banking or manual receipt tracking, discerning between essentials and non-essentials, and implementing small, everyday actions to cut costs. Motivation is reinforced by keeping savings goals visible and meaningful, such as for desired purchases like shoes or a phone.</p>
            </div>
          </div>
        </div>

        <div className="space2"></div>
        <div className=' videocontent'>
          <div className='content flex'>
            <div id='left'>
              <iframe src="https://eclasss.h5p.com/content/1292220095172577498/embed" aria-label="It All Adds Up to Making Cents: Saving Money" width="560" height="410" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://eclasss.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script></div>
            <div id='text'>
              <h1>Part 3: Saving Money</h1>
              <p>This video offers practical advice that can be applied to York University newcomers in Canada on managing finances. It emphasizes the importance of budgeting and using online banking tools to save money effectively. Here, it recommends newcomers to set up two bank accounts: a chequing account and a savings account. People pay their bills using a chequing account and save using a savings account. The video suggests newcomers to start by saving a small percentage of each paycheck, even if it's just a modest amount, in order to build a financial safety net over time. Tips like rounding up savings and setting up automatic deposits are shared to also encourage consistent saving habits.</p>
            </div>
          </div>
        </div>

        <div className="space2"></div>

        <div className=' videocontent'>
          <div className='content flex'>
            <div id='left'>
              <iframe src="https://eclasss.h5p.com/content/1292219079630194728/embed" aria-label="It All Adds Up to Making Cents: Paying Yourself First" width="560" height="410" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://eclasss.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script></div>
            <div id='text'>
              <h1>Part 4: Pay Yourself First</h1>
              <p>This video highlights different methods to save money that newcomers to Canada can implement when managing their finances. The two main methods the video suggests is: Pay Yourself First and use S.E.T Goals. The video mentions how usually individuals tend to spend their money on goods they wish to purchase and then save the rest into their bank account. However, it is suggested that one should first take a specific amount of money and immediately deposit it into a savings account. This ensures that as a newcomer one has money saved if ever needed and for larger purchases. The video also goes to describe S.E.T goals as See It, Explain It, and, Time It to help save.</p>
            </div>
          </div>
        </div>

        <div className="space2"></div>

        <div className=' videocontent'>
          <div className='content flex'>
            <div id='left'>
              <iframe src="https://eclasss.h5p.com/content/1292219122451723448/embed" aria-label="It All Adds Up to Making Cents: How to Budget" width="560" height="410" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://eclasss.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script></div>
            <div id='text'>
              <h1>Part 5: How to Budget</h1>
              <p>This video presents tips on how to budget as a newcomer to Canada. The video goes to explain how a budget balances your incomes (the money coming into your account) and expenses (the money going out of your account). It also goes into describing the step by step process on how to create a budget and how to determine which categories are your expenses and which are part of one’s income. Examples are also provided to help the viewer better understand financial calculations in a budgeting context.</p>
            </div>
          </div>
        </div>


        <div className="space"></div>
        <h1>Financial Literacy Workshops at RBC on Campus</h1>

        <p>Workshops that are available on campus offered by the friendly staff! Workshops maybe held online or in-person. Click on the events avaliable in the calendar below to register.      </p>
        <div className="space"></div>
        <Eventcalendar
          clickToCreate={false}
          dragToCreate={false}
          dragToMove={false}
          dragToResize={false}
          eventDelete={false}
          data={myEvents}
          view={myView}
          onEventClick={handleEventClick}
        />
        {/* <Toast message={toastText} isOpen={isToastOpen} onClose={handleToastClose} /> */}


      </div>
      <div className="space2"></div>


      { }
    </>
  )
}

export default CoursesCard
