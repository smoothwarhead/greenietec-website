import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
import { homeContents } from "../../files/homecontents.js";

import HomeContent from "../../components/HomeContent";
import HomeSection1 from "./homesections/HomeSection1.js";
import ScrollContext from "../../context/ScrollContext.js";
// import HomeSection1 from "../home/homesections/HomeSection1.js";









gsap.registerPlugin(Observer, ScrollTrigger);




function Home() {

	const {main} = useContext(ScrollContext);
	const ctx = useRef();

	const [currentIndex, setCurrentIndex] = useState(-1);
	const [animating, setAnimating] = useState(false);






	


	useEffect(() => {
		console.log(ctx.current)

	}, []);




	useLayoutEffect(() => {

		let sections = gsap.utils.toArray(".home-scroller-inner .home-intro");


		


		ctx.current = gsap.context(() => {
			// set second panel two initial 100%
			gsap.set(".y-100", { yPercent: 100 });

			// set z-index levels for the swipe panels
			gsap.set(sections, {
				zIndex: (i) => i
			});

			// handle the panel swipe animations
			function gotoPanel(index, isScrollingDown) {

				setAnimating(true);

				// return to normal scroll if we're at the end or back up to the start
				if ((index === sections.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
			
					let target = index;
					gsap.to(target, {
						// xPercent: isScrollingDown ? -100 : 0,
						duration: 0.00,
						onComplete: () => {
							setAnimating(false);
							isScrollingDown && Observer.disable();
						}
					});
					return
				}


				//   target the second panel, last panel?
				let target = isScrollingDown ? sections[index] :   sections[currentIndex];

				gsap.to(target, {
				yPercent: isScrollingDown ? 0 : 100,
				duration: 0.75,
				onComplete: () => {
					setAnimating(false);
				}
				});
				setCurrentIndex(index);
				console.log(index);
			}


			// create an observer and disable it to start
			let intentObserver = ScrollTrigger.observe({
				type: "wheel,touch,scroll",
				onUp: () => !animating && gotoPanel(currentIndex + 1, true),
				onDown: () => !animating && gotoPanel(currentIndex - 1, false),
				wheelSpeed: -1,
				tolerance: 10,
				preventDefault: true,
				onPress: (self) => {
				// on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
				ScrollTrigger.isTouch && self.event.preventDefault();
				}
			});
			intentObserver.disable();
		  
		}, main.current);
		return () => ctx.current.revert();
	  }, [main, animating, currentIndex]);




	
	


	return (

		<>
			<div className="app-page home">
				<div className="home-scroller" ref={main}>
					<div className="home-scroller-inner">

						<HomeSection1 />

						{
							homeContents.map((content, index) => (
								<HomeContent
									key={index}
									index={index}
									{...content}

								/>
							))
						}

					</div>
					
				</div>				
				
{/* 
				{
					homeContents.map((content, i) => (

						<section className={`section-${i + 1}`} key={i}>
							<div className="outer">
								<div className="inner">
									<HomeContent
									index = {i}
										{...content}
									/>
									
								</div>
							</div>
							
						</section>
						// <section className={`panel panel-${i+1}`} key={i}>
						// 	<HomeContent
						// 		{...content}
						// 	/>
						// </section>
					))
				} */}

				

			</div>
		</>
	);
}

export default Home;
