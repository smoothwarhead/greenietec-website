import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/sidebar.css";
import { ReactComponent as SvgIcon } from "../../assets/svgs/logo.svg";
// import { GiHamburgerMenu } from 'react-icons/gi';
import Menubar from "./menubar/Menubar";
// import MenuSlide from "../menuslide/MenuSlide";
import { gsap, Power1 } from 'gsap';
import NavContext from "../../context/NavContext";
import MenuSlide from "../slides/MenuSlide";



function Sidebar() {

	

	const {slideMenu, setSlideMenu} = useContext(NavContext);


	const handleToggle = () => {
		
		setSlideMenu(!slideMenu);
	};


	// const navRef = useRef();

    // const tl = useRef();

 
	// console.log(navRef);


    // useEffect(() => {
        
    //     tl.current = gsap.timeline({ paused: true });

    //     // tl.current.to(navRef.current, {
    //     //     display: "block",
    //     //     duration: 0,
    //     //     ease: Power1.easeInOut
    //     // });

    //     tl.current.to(navRef.current, {
	// 		backgroundColor: '#031028',		
    //         duration: 0.5,
    //         ease: Power1.easeInOut
    //     });

               


    // }, [])


    // useEffect(() => {
        
    //  slideMenu ? tl.current.play() : tl.current.reverse()



    // }, [slideMenu]);


	return (
		<>
			<MenuSlide />
			<div className="sidebar">
				<Link className="logo" to="./" >
					<div className="logo-pic">
						<SvgIcon />
					</div>
					<div className="logo-text">greenietec software</div>
				</Link>
				<div className="navbar">
					<ul>
						<li>
							<NavLink to="./Services" >
								Services
							</NavLink>
						</li>
						<li>
							<NavLink to="./Projects" >
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink to="./About" >
								About us
							</NavLink>
						</li>
						<li>
							<NavLink to="./Contact" >
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
				{/* <div className="menu-bar" onClick={handleToggle}>
					
					<Menubar />

				</div> */}
				
			</div>




			<div className='mobile-navbar'  >

				<Link className="m-logo" to="/" >
					<div className="m-logo-pic">
						<SvgIcon />
					</div>
					<div className="m-logo-text">greenietec software</div>
				</Link>
            
				<div className="menu-bar"
					onClick={handleToggle}
				>
					{/* <GiHamburgerMenu className='menu-icon'/> */}
					<Menubar
						slideMenu={slideMenu} 
						setSlideMenu={setSlideMenu}
					
					/>

				</div>
	
		  </div>
		</>
	);
}

export default Sidebar;
