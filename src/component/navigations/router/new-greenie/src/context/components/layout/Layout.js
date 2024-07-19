// import { NavProvider } from "../../context/NavContext";
// import BgSphere from "../sphere/BgSphere";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import '../../styles/layout.css';
import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Sidebar from "../navigations/Sidebar";
import Footer from '../footer/Footer';
import Spiral from '../spiral/Spiral';
import BgSphere from '../sphere/BgSphere';
import ScrollContext from '../../context/ScrollContext';
// import Sphere from '../sphere/Sphere';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);





const Layout = ({ children }) => {

 


    return (
       
        <div className="main-content" >

            <div className="section top-content">


                <div className="back-g">
					<div className="sphere-bg">
						<BgSphere />
					</div>
					<Spiral />
					
				</div>        
                

                <div className="main-body">

                    <div className="side-content">
                        <Sidebar />

                    </div>

                    <div className="main-body-content">
                        {children}

                    </div>
                </div>

                
               
            </div>


            <div className="section footer">
                <Footer />

            </div>



            {/* <section className="section top-content" ref={addToRefs}>
                <div className="container">
                    <div className="left-con">
                        <Sidebar />

                    </div>
                    <div className="right-con"></div>

                </div>
                
               
            </section>


            <section className="section footer" ref={addToRefs}>

                <div className="container">
                    <div className="left-con">
                        <Footer />

                    </div>
                    <div className="right-con"></div>

                </div>
            </section> */}
            
            
        </div>

       
        
     );
}
 
export default Layout;