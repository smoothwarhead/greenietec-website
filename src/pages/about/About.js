import React, { useContext, useEffect, useRef, useState } from "react";
// import "./project.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from 'split-type';
import { IoIosArrowRoundForward } from "react-icons/io";

import Footer from "../../component/footer/Footer";
import { ViewContext } from "../../context/ViewContext";
import TransitionContext from "../../context/TransitionContext";






gsap.registerPlugin(SplitType);






function About() {

	let content
	


	const aboutScroller = useRef();

	const { setLight, setDark, setBg, xl, setColor, medium, loading } = useContext(ViewContext);
	const { pageTransition, completed, setCompleted } = useContext(TransitionContext);

	const [cardBg, setCardBg] = useState("");
	const [cardColor, setCardColor] = useState("");
	


	useEffect(() => {

		let bgColor = "linear-gradient(100deg, #204860 0%, #00040b 100%)";
		let color = "#b1bfd8";

		setColor(color);
		setCardBg(bgColor);
		setCardColor(color);
		setLight(color);
		setDark("#2f624b");
		setBg(bgColor)

		// console.log(bgColor, color);


		gsap.set(".back-g", {
			background: bgColor,
			color: color,
			overwrite: "auto"
		});

		pageTransition.play();
        // setCompleted(false);


	}, [pageTransition, setBg, setColor, setDark, setLight])



       


	content = (

			<div className="about-scroller" ref={aboutScroller} style={{ color: cardColor }}>

				{/* <TransitionComponent /> */}

				<section className="about-panel a-one">

					<div className="about-bg">

						<div className="about-inner intro-section">
							<div className="intro-h1">
								Coming soon

							</div>

							<div className="intro-p">
								
								
							</div>


						</div>

					</div>



				</section>


			


			</div>

		)








	return content;

}

export default About;
