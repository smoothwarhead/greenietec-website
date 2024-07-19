import React, { useContext, useEffect, useRef, useState } from "react";
// import Scroll from "../../components/scroll.js/Scroll";
// import Gridcard from "./grid/Gridcard";
// import Illustration from "./illustration/Illustration";
import "./services.css";
import { ReactComponent as Illustration } from "./illustration.svg";
import Gridcard from "./grid/Gridcard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from 'split-type';
import GridData from "./grid/GridData";
import ServiceSection from "./servicesection/ServiceSection";
import '../home/home.css'
import { useLocation } from "react-router-dom";
import TransitionEffect from "../../layout/TransitionEffect";
import TransitionContext from "../../context/TransitionContext";
import { animateIntro, animateSectionThree, animateSectionTwo } from "./serviceAnimation";
import ScrollContext from "../../context/ScrollContext";
import Footer from "../../component/footer/Footer";
import { ViewContext } from "../../context/ViewContext";
import { servicesQuery } from "../../utils/contentClient";
import ServiceSkeleton from "./ServiceSkeleton";
import useFetch from "../../hooks/useFetch";





gsap.registerPlugin(SplitType);



function Services() {


	const { data, isSuccess } = useFetch(servicesQuery);

	const { setLight, setDark, setBg, xl, setColor, loading, setLoading } = useContext(ViewContext);


	let content;





	const [cardBg, setCardBg] = useState("");
	const [cardColor, setCardColor] = useState("");


	const { pageTransition, completed, setCompleted } = useContext(TransitionContext);

	// const tl = useRef();
	const serviceScroller = useRef();
	// const tl = useRef();

	const [servicesRef, setServicesRef] = useArrayRef();

	function useArrayRef() {
		const servicesRef = useRef([]);
		servicesRef.current = [];
		return [servicesRef, (ref) => ref && servicesRef.current.push(ref)]
	}

	useEffect(() => {


		let bgColor = "linear-gradient(90deg, #081832 0%, #00040b 100%)";
		let color = "#cad6ec";

		setColor(color);
		setCardBg(bgColor);
		setCardColor(color);

		setLight(color);
		setDark("#081832");
		setBg(bgColor);



		gsap.set(".back-g", {
			background: bgColor,
			color: color,
			overwrite: "auto"
		});

        pageTransition.play();
        // setCompleted(false);



	}, [pageTransition, setBg, setColor, setDark, setLight]);





	// if (loading  && !completed) {
	// 	content = (
	// 		<div className="services-scroller" ref={serviceScroller} >
	// 			{!xl && <TransitionEffect pathName="Services" />}

	// 		</div>
	// 	)
	// }


	if (loading) {
		content = (
			<div className="services-scroller" ref={serviceScroller} >
				
				<ServiceSkeleton />
			</div>
		)
	}



	useGSAP(() => {
		
		if (loading && !data) {
			return
		} else {

			if (!loading && isSuccess) {


				// animate intro
				animateIntro();



				// animate second section on scroll
				animateSectionTwo();


				// animate three section on scroll
				animateSectionThree(servicesRef);
			} else{
				return;

				
			}

		}



	}, { dependencies: [xl, loading, data, isSuccess], scope: serviceScroller });



	if (!loading && isSuccess) {


		const texts = data?.servicesCollection.items[0];

		const services = data?.serviceCollection.items;

		content = (

			<div className="services-scroller" ref={serviceScroller} style={{ color: cardColor }}>




				<section className="service-panel service-one">

					<div className="service-bg">

						<div className="section-inner inner-1">
							<div className="section-up">
								<div className="devh1">
									{texts.topHeading}
								</div>
							</div>

							<div className="section-btm">


								<p className="devp">
									{texts.note}

								</p>

							</div>

						</div>

					</div>



				</section>


				<section className="service-panel service-two">

					<div className="service-bg">

						<div className="section-inner inner-1">
							<div className="flex">
								<div className="flex-h1">
									{texts.subHeading}
								</div>

								<p className="flex-p">
									{texts.subNote}

								</p>

							</div>


							<div className="illustration">
								<Illustration className="diagram" />
								{/* <RotatedArrow /> */}
							</div>


						</div>

					</div>



				</section>



				<section className="service-panel service-three">

					<div className="service-bg">

						<div className="section-inner inner-2">

							{
								services.map((data, i) => (
									<ServiceSection
										key={i}
										service={data}
										setServicesRef={setServicesRef}
										cardBg={cardBg}
										cardColor={cardColor}
										index={i}

									/>
								))
							}



						</div>

					</div>



				</section>


				<section className="service-panel service-four">

					<div className="footer">

						<Footer />

					</div>



				</section>


			</div>

		)
	}


	return content;
}

export default Services;
