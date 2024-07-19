import React, { useEffect } from "react";
import Scroll from "../../../components/scroll.js/Scroll";
import "../services.css";
import gsap from "gsap";
import { Power4 } from "gsap";

function ServiceSection1() {
	useEffect(() => {
		const ser = gsap.timeline({ delay: 0.3 });
		ser.fromTo(
			".devh1",
			{
				y: 120,

				// opacity: 0,
			},
			{
				y: 0,
				duration: 1.3,
				ease: Power4.easeOut,
			}
		);
		ser.fromTo(
			".devp",
			{
				y: 120,

				// opacity: 0,
			},
			{
				y: 0,
				duration: 1,
				ease: Power4.easeOut,
			},
			0.2
		);
	}, []);
	return (
		<>
			<section>
				<div className="section-left"></div>
				<div className="section-right">
					<h1 className="dev">
						<div className="devh1">
							Applications With Unique Features And Functionalities
						</div>
					</h1>
					<Scroll />
					<p>
						<div className="devp">
							Businesses small and large need web-based solutions to meet their
							and their client's needs. GreenieTec delivers services that are
							scalable, flexible, and most importantly secure which cut across a
							range of platforms, technologies, and design techniques.
						</div>
					</p>
				</div>
			</section>
		</>
	);
}

export default ServiceSection1;
