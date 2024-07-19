import React, { useEffect, useRef } from "react";
import "../../../styles/home.css";
import gsap from "gsap";
// import { Power4 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger, SplitText);



function HomeSection2() {

	// const tl = useRef();


	// useEffect(() => {

	// 	tl.current = gsap.timeline({ defaults: { ease: "power4.inOut"}});

	// 	tl.current.to('.devh1', { 
	// 		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
	// 		opacity: 1,
	// 		y: 0,
	// 		stagger: 0.02,
	// 		duration: 1
	// 	})
	// 	.to('.devh2', {
	// 		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
	// 		opacity: 1,
	// 		y: 0,
	// 		stagger: 0.02,
	// 	}, "-=0.5")
	// 	.to('.devp', {
	// 		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
	// 		opacity: 1,
	// 		y: 0,
	// 	}, "-=0.5")

	// }, [])




	return (
		<>

			<section className="home-section">				
					
					
					
				<div className="home-section-up">
					<div className="devh1">Customize Software</div>
				</div>

				<div className="home-section-btm">
					<div className="devh">Driving innovation in business</div>

					<div className="devp">
						Based on your business unique need, goals and requirements.
						customise your business with innovative technologies.
					</div>

					

				</div>					
					

				
			</section>


		</>
	);
}

export default HomeSection2;
