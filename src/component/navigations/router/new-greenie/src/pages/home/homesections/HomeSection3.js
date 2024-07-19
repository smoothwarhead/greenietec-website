import React, { useEffect } from "react";
import "../home.css";
import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HomeSection3() {
	useEffect(() => {
		gsap.fromTo(
			".thirdh1",
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
					trigger: ".thirdh1",
					// markers: true,
					start: "top 70%",
					toggleActions: "play pause resume reverse",
				},
			}
		);
		gsap.fromTo(
			".thirdh2",
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
					trigger: ".thirdh2",
					// markers: true,
					start: "top 100% center 90%",
					toggleActions: "play pause resume reverse",
				},
			}
		);
		gsap.fromTo(
			".thirdp",
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
					trigger: ".thirdp",
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
						<div className="thirdh1">Visual and functional design</div>
					</h1>

					<h2 className="h-2">
						<div className="thirdh2">Design responsive websites</div>
					</h2>
					<p className="home-p">
						<div className="thirdp">
							Plan and design creative and responsive websites around every page
							objectives with great user experience and works on all digital
							platforms.
						</div>
					</p>
				</div>
			</section>
		</>
	);
}

export default HomeSection3;
