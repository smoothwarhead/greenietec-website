import React, { useEffect } from "react";
import { ReactComponent as Illustration } from "../illustration.svg";
import "../services.css";
import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ServiceSection2() {
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
			<section className="service-second-section ">
				<div className="section-left"></div>
				<div className="section-right ">
					<div className="flex">
						<h1 className="flex-dev" style={{ overflowY: "hidden" }}>
							<div className="flexh1" style={{ color: "#f7dd95" }}>
								Our Development Process
							</div>
						</h1>

						<p className="flex-p" style={{ overflowY: "hidden" }}>
							<div className="flexp">
								GreenieTec is commited to the creation of platforms (website or
								applications) and solutions to boost your visual experience.
							</div>
						</p>
					</div>
					<div className="illustration">
						<Illustration className="diagram" />
						{/* <RotatedArrow /> */}
					</div>
				</div>
			</section>
		</>
	);
}

export default ServiceSection2;
