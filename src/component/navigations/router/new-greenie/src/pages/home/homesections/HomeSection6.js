import React, { useEffect } from "react";
import "../home.css";
import Homeform from "../homeform/Homeform";
import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HomeSection6() {
	useEffect(() => {
		gsap.fromTo(
			".flexh1",
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				duration: 1,
				opacity: 1,
				ease: Power4.easeOut,
				scrollTrigger: {
					trigger: ".flexh1",
					// markers: true,
					start: "top 70%",
					toggleActions: "play pause resume reverse",
				},
			}
		);
		gsap.fromTo(
			".flexp",
			{
				y: 100,
				opacity: 0,
			},
			{
				y: 0,
				duration: 1,
				opacity: 1,
				ease: Power4.easeOut,
				scrollTrigger: {
					trigger: ".flexp",
					// markers: true,
					start: "top 60%",
					toggleActions: "play pause resume reverse",
				},
			}
		);
	}, []);
	return (
		<>
			<section className="home-section form-home">
				<div className="section-left"></div>
				<div className="section-right home-form-right">
					<div className="flex">
						<h1 className="flex-dev" style={{ overflowY: "hidden" }}>
							<div className="flexh1" style={{ color: "#f7dd95" }}>
								Let's get started today!
							</div>
						</h1>
						<p className="flex-p" style={{ overflowY: "hidden" }}>
							<div className="flexp">
								Share your business goal and we will take care of its entire
								development process. From strategic planning to deployment and
								maintenance.
							</div>
						</p>
					</div>
					<Homeform />
				</div>
			</section>
		</>
	);
}

export default HomeSection6;
