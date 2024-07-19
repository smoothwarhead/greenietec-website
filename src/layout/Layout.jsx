import './layout.css';

import Header from '../component/navigations/header/Header';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackGround from './BackGround';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ViewContext } from '../context/ViewContext';
import MobileHeader from '../component/navigations/header/mobile/MobileHeader';






gsap.registerPlugin(ScrollTrigger);




const Layout = ({ children }) => {

	  const { xl } = useContext(ViewContext);

   

    const location = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, [location]);

    

  return (
    <>
         
        <BackGround />

        { xl ?
          <MobileHeader />

          :
          
          <Header />
        }

        {/* {children}         */}


        {/* {<TransitionEffect pathName = {location.pathname} transition = {transition} />} */}
      <div className="app-page-container">
        {children}        
      </div>

    
    </>
  )
}

export default Layout