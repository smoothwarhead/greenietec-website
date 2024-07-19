import React, { useEffect } from "react";
import "../home.css";
import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HomeSection5() {
	useEffect(() => {
		gsap.fromTo(
			".fifthh1",
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
					trigger: ".fifthh1",
					// markers: true,
					start: "top 70%",
					toggleActions: "play pause resume reverse",
				},
			}
		);
		gsap.fromTo(
			".fifthh2",
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
					trigger: ".fifthh2",
					// markers: true,
					start: "top 100% center 90%",
					toggleActions: "play pause resume reverse",
				},
			}
		);
		gsap.fromTo(
			".fifthp",
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
					trigger: ".fifthp",
					// markers: true,
					start: "top 90% ",
					toggleActions: "play pause resume reverse",
				},
			}
		);
	}, []);
	return (
		<>
			<section className="home-section">
				<div className="section-left"></div>
				<div className="section-right">
					<h1 className="dev">
						<div className="fifthh1">Remove Software bugs</div>
					</h1>

					<h2 className="h-2">
						<div className="fifthh2">
							Justify the importance of software testing.
						</div>
					</h2>
					<p className="home-p">
						<div className="fifthp">
							Evaluate the functionality of a software application to ensure
							that the product is defect-free and produces a high-quality
							product.
						</div>
					</p>
				</div>
			</section>
		</>
	);
}

export default HomeSection5;
