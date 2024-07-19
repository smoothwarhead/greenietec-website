
import './App.css';
import Layout from './layout/Layout';
import Router from './component/navigations/router/Router';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SessionManager from './utils/SessionManager';
import TransitionEffect from './layout/TransitionEffect';
import TransitionContext from './context/TransitionContext';
import NavContext from './context/NavContext';
import { ViewContext } from './context/ViewContext';





gsap.registerPlugin(Observer, useGSAP, ScrollTrigger);


const routes = {
  "/": "Home",
  "/about": "About",
  "/work": "Work",
  "/contact": "Contact",
  "/services": "Services",
};







function App() {


  const { setPathName, setCompleted } = useContext(TransitionContext);
  const { navs, setNavs } = useContext(NavContext);

  const location = useLocation();

  const scroller = useRef();


  useEffect(() => {

    // setCompleted(false);

    const prevLocation = SessionManager.getLocation();

    if(!prevLocation){

      setPathName(routes[location.pathname]);

      SessionManager.setLocation(location.pathname);


    }else{

      if(location.pathname !== prevLocation){

        setPathName(routes[location.pathname]);
        SessionManager.setLocation(location.pathname);

      }else{
  
        setPathName("greenietec");
        
  
  
      }

    }

  }, [location, setPathName]);







  useEffect(() => {

    if(location.pathname.includes("home")){

      const updatedNavs = navs.map((nav) => {
        return 	{...nav, active: false};

      });
  
      setNavs(updatedNavs);

    }else{

      const updatedNavs = navs.map((nav) => {
        if(nav.href.toLowerCase() === location.pathname.toLowerCase()){
          return {...nav, active: true};

        }else{
          return 	{...nav, active: false};
        }
      });

      setNavs(updatedNavs);
    }
   
  }, [location])

  // console.log(navs);

  return (
    

    <Layout>

      {/* <TransitionEffect /> */}

      <Router scroller={scroller} />
      
    </Layout>
  

  );
}

export default App;
