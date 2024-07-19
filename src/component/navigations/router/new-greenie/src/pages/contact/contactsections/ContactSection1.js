import React, { useEffect } from "react";
import Scroll from "../../../components/scroll.js/Scroll";
import gsap from "gsap";
import { Power4 } from "gsap";

function ContactSection1() {
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
							GET IN TOUCH, WE'D LOVE TO HEAR FROM YOU!
						</div>
					</h1>
					<Scroll />
					<p>
						<div className="devp">
							If you're interested in working with us or would just like to
							discuss some of your ideas, please complete the form below, send
							us an email or give us a call. We will answer you as soon as
							possible.
						</div>
					</p>
				</div>
			</section>
		</>
	);
}

export default ContactSection1;
