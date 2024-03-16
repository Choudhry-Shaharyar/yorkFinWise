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
      title: 'Getting and Building Good Student Credit',
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
      <div className="space">
        <h3>        Financial Literacy Series
    </h3>
        <p>
Learning financial literacy will enable you to better understand your lifestyle and set you up for success. It can really change your life forever. Take a look at our five part series to make sense of your money. Take a look at this series to make sense of your money.
        </p>

      </div>
        <div className='content flex'>
          <div className='left'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/53QIU5RHPWQ?si=hjT83c0uTgU2kO1f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
          <div id='text'>
          <h1>Part 1: Understanding Income</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>
           <div className="space2"></div>

        <div className='content flex'>
          <div id='left'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/U9PDjDeZODE?si=ueJbq0rnTfZ3CloL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
          <div id='text'>
          <h1>Part 2: Spending Money</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>
        <div className="space2"></div>

        <div className='content flex'>
          <div id='left'>
          <iframe src="https://eclasss.h5p.com/content/1292220095172577498/embed" aria-label="It All Adds Up to Making Cents: Saving Money" width="560" height="410" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://eclasss.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script></div>
          <div id='text'>
          <h1>Part 3: Saving Money</h1>
          <p>This video offers practical advice that can be applied to York University newcomers in Canada on managing finances. It emphasizes the importance of budgeting and using online banking tools to save money effectively. Here, it recommends newcomers to set up two bank accounts: a chequing account and a savings account. People pay their bills using a chequing account and save using a savings account. The video suggests newcomers to start by saving a small percentage of each paycheck, even if it's just a modest amount, in order to build a financial safety net over time. Tips like rounding up savings and setting up automatic deposits are shared to also encourage consistent saving habits.</p>
          </div>
        </div>
        <div className="space2"></div>

        <div className='content flex'>
          <div id='left'>
          <iframe src="https://eclasss.h5p.com/content/1292219079630194728/embed" aria-label="It All Adds Up to Making Cents: Paying Yourself First" width="560" height="410" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://eclasss.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script></div>
          <div id='text'>
          <h1>Part 4: Pay Yourself First</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>
        <div className="space2"></div>

        <div className='content flex'>
          <div id='left'>
          <iframe src="https://eclasss.h5p.com/content/1292219122451723448/embed" aria-label="It All Adds Up to Making Cents: How to Budget" width="560" height="410" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://eclasss.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script></div>
          <div id='text'>
          <h1>Part 5: How to Budget</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>
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
      <Toast message={toastText} isOpen={isToastOpen} onClose={handleToastClose} />
    

    </div>
    <div className="space2"></div>
    

      {/* <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section> */}
    </>
  )
}

export default CoursesCard
