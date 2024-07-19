import { useContext, useEffect, useRef } from 'react';
import '../../styles/slides.css'
import { gsap, Power1 } from 'gsap';
// import { NavLink,Link } from 'react-router-dom';
// import { navItems } from '../navigation/navItems';

import { Link } from "react-router-dom";
import { ReactComponent as SvgIcon } from "../../assets/svgs/logo.svg";
import NavContext from '../../context/NavContext';
import Menubar from '../navigations/menubar/Menubar';



const MenuSlide = () => {

    const { slideMenu, setSlideMenu } = useContext(NavContext);




     const menuRef = useRef();
     const containerRef = useRef();
     const navRef = useRef();

    const tl = useRef();

 


    useEffect(() => {
        
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(containerRef.current, {
            display: "block",
            duration: 0,
            ease: Power1.easeInOut
        });

        tl.current.to(menuRef.current, {
            left: 0,
            duration: 0.5,
            ease: Power1.easeInOut
        });

        tl.current.to(navRef.current, {
            left: 0,
            backgroundColor: '#031028',
            ease: Power1.easeInOut
        });

               


    }, [])


    useEffect(() => {
        
     slideMenu ? tl.current.play() : tl.current.reverse()



    }, [slideMenu]);


    const handleClick = () => {
    //    setIsDark(!isDark);
       setSlideMenu(!slideMenu);
      
    }


  return (
    <>
       
        <div className='slide-container' ref={containerRef}>
            <div className="mobile-menu-container" ref={menuRef}> 
                <div className="menu-mobile-navbar" ref={navRef}>

                    <Link className="m-logo" to="/" >
                        <div className="m-logo-pic">
                            <SvgIcon />
                        </div>
                        <div className="m-logo-text">greenietec software</div>
                    </Link>

                    <div className="menu-bar" onClick={handleClick}>
                 
                        <Menubar />

                    </div>

                </div>             

                <div className="m-nav-body">
{/*                     
                    <div className="m-nav-body-el">
                        {
                        navItems.map((item, index) => (
                            <NavLink
                                to={item.to}
                                key={index}
                            >
                                {item.name}
                            </NavLink>
                        ))
                        }
                    </div> */}
                    

                </div>

            

            </div>
        </div>
    </>
  )
}

export default MenuSlide