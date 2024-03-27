import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import JobsPage from "./components/Jobs/JobsPage"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';


function App() {
  ReactGA.initialize('G-859KTQ2VXH');

  useEffect(()=> {
    ReactGA.send({
      hitType: 'pageview',
      page: '/',
      title: 'Home'
    });
  }, []);

  useEffect(()=> {
    ReactGA.pageview(window.location.pathname);
    }, []);




  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/learn' component={CourseHome} />
          <Route exact path='/information' component={Pricing} />
          <Route exact path='/earn' component={JobsPage} />
          <Route exact path='/banking' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
