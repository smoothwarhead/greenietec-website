import "../../../styles/home.css";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);




function HomeSection1({ scrollTo, goToSection }) {

	// useEffect(() => {
	// 	const handleScroll = (event) => {
	// 	  scrollTo(goToSection);
	// 	};
	
	// 	window.addEventListener('scroll', handleScroll);
	
	// 	return () => {
	// 	  window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, [scrollTo, goToSection]);
	

    // const tl = useRef();
	// const heroComp = useRef();

	// // const heroText = SplitType.create('.devh1');
	// // const heroPara = SplitType.create('.devp');


	// useEffect(() => {

	// 	tl.current = gsap.timeline({ defaults: { ease: "power4.inOut"}});

	// 	tl.current.to('.devh1', { 
	// 		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
	// 		opacity: 1,
	// 		y: 0,
	// 		stagger: 0.02,
	// 		duration: 1
	// 	})
	// 	.to('.devp', {
	// 		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
	// 		opacity: 1,
	// 		y: 0,
	// 		stagger: 0.02,
	// 	}, "-=0.5")
	// 	.to('.learn-more-btn', {
	// 		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
	// 		opacity: 1,
	// 		y: 0,
	// 	}, "-=0.5")
		

	// }, [])

	


	
	
	return (
		<>
			<section className="page-intro home-intro">				
					
					
					
					<div className="home-section-up">
						<div className="page-intro-title home-intro-title">DEVELOP EXTRAORDINARY SOFTWARE</div>
					</div>

					<div className="home-section-btm">
						<p className="page-intro-text home-intro-text">
							greenieTec deliver secure and scalable web solutions to meet
							spikes in demand. We create essential and memorable websites that
							grow your business. We build fun experiences using cutting edge
							technologies.
						</p>

						<div className="learn-more-btn">Learn more</div>



					</div>
					
					

				
			</section>
		</>
	);
}

export default HomeSection1;
