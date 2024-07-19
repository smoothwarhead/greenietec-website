import React, { useEffect } from "react";
import "../home.css";
import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HomeSection4() {
	useEffect(() => {
		gsap.fromTo(
			".fourthh1",
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
					trigger: ".fourthh1",
					// markers: true,
					start: "top 70%",
					toggleActions: "play pause resume reverse",
				},
			}
		);
		gsap.fromTo(
			".fourthh2",
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
					trigger: ".fourthh2",
					// markers: true,
					start: "top 100% center 90%",
					toggleActions: "play pause resume reverse",
				},
			}
		);
		gsap.fromTo(
			".fourthp",
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
					trigger: ".fourthp",
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
						<div className="fourthh1">Manage Database</div>
					</h1>

					<h2 className="h-2">
						<div className="fourthh2">Creating and managing databases.</div>
					</h2>
					<p className="home-p">
						<div className="fourthp">
							We manage data in an organized, efficient, and accessible format
							and maintain the data integrity over time.
						</div>
					</p>
				</div>
			</section>
		</>
	);
}

export default HomeSection4;
