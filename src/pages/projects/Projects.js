import React, { useContext, useEffect, useRef, useState } from "react";
import "./project.css";
import ProjectData from "./projectcards/ProjectData";
import ProjectCard from "./projectcards/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from 'split-type';
import { ReactComponent as Collaborate } from "../../assets/svgs/collaborate.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useLocation } from "react-router-dom";
import TransitionEffect from "../../layout/TransitionEffect";
import TransitionContext from "../../context/TransitionContext";
import { animateIntro, animateSectionThree, animateSectionTwo } from "./projectAnimation";
import ScrollContext from "../../context/ScrollContext";
import Footer from "../../component/footer/Footer";
import { ViewContext } from "../../context/ViewContext";
import MobileProjectCard from "./projectcards/mobile/MobileProjectCard";
import { workQuery } from "../../utils/contentClient";
import ProjectSkeleton from "./ProjectSkeleton";
import useFetch from "../../hooks/useFetch";






gsap.registerPlugin(SplitType);






function Projects() {



	const { data, isSuccess } = useFetch(workQuery);

	let content;

	const { setLight, setDark, setBg, xl, setColor, medium, loading } = useContext(ViewContext);
	const { pageTransition, completed, setCompleted } = useContext(TransitionContext);

	const [cardBg, setCardBg] = useState("");
	const [cardColor, setCardColor] = useState("");




	const projectsScroller = useRef();

	//collaboration button
	const [btnActive, setBtnActive] = useState(false);


	// const tl = useRef();

	const [projectsRef, setProjectsRef] = useArrayRef();
	const [mobileProjectsRef, setmobileProjectsRef] = useMobileArrayRef();




	function useArrayRef() {
		const projectsRef = useRef([]);
		projectsRef.current = [];
		return [projectsRef, (ref) => ref && projectsRef.current.push(ref)]
	}

	function useMobileArrayRef() {
		const mobileProjectsRef = useRef([]);
		mobileProjectsRef.current = [];
		return [mobileProjectsRef, (ref) => ref && mobileProjectsRef.current.push(ref)]
	}


	useEffect(() => {

		let bgColor = "linear-gradient(100deg, #2f624b 0%, #00040b 100%)";
		let color = "#8acdb8";

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


	// if (loading && !completed) {
	// 	content = (
	// 		<div className="projects-scroller" ref={projectsScroller}>
	// 			{!xl && <TransitionEffect pathName="Work" />}

	// 		</div>
	// 	)
	// };


	if (loading) {
		content = (
			<div className="projects-scroller" ref={projectsScroller}>
				
				<ProjectSkeleton />
			</div>
		)
	};



	useGSAP(() => {

		if (loading && !data) {
			return;
		} else {

			if(!loading && isSuccess){
				

				animateIntro(projectsScroller);

				//animate section two
				{!medium ? animateSectionTwo(projectsRef) : animateSectionTwo(mobileProjectsRef)};

				//animate section three
				animateSectionThree();
				

			}else{
				return;
			}


		}





	}, { dependencies: [medium, loading, data, isSuccess], scope: projectsScroller });




	if (!loading && isSuccess) {
       

		const texts = data?.workPageCollection.items[0];

		const projects = data?.workCollection.items;

		content = (

			<div className="projects-scroller" ref={projectsScroller} style={{ color: cardColor }}>

				{/* <TransitionComponent /> */}

				<section className="project-panel p-one">

					<div className="project-bg">

						<div className="project-inner intro-section">
							<div className="intro-h1">
								{texts.topHeading}

							</div>

							<div className="intro-p">
								{texts.note}
								
							</div>


						</div>

					</div>



				</section>


				<section className="project-panel p-two">

					<div className="project-bg">

						<div className="project-inner project-con">

							{
								projects.map((project, i) => {

									if (!medium) {
										return <ProjectCard
											project={project}
											cardBg={cardBg}
											cardColor={cardColor}
											key={i}
											index={i}
											setProjectsRef={setProjectsRef}

										/>
									} else {
										return <MobileProjectCard
											project={project}
											cardBg={cardBg}
											cardColor={cardColor}
											key={i}
											index={i}
											setProjectsRef={setmobileProjectsRef}

										/>

									}

								})
							}

						</div>

					</div>


				</section>

				<section className="project-panel p-three">

					<div className="project-bg">

						<div className="project-inner project-con">

							<div className="collab-card">

								<div className="collab-header">Collaboration</div>

								<div className="collab-con">
									<div className="collab-con-inner">
										<span className="collab-icon">

											<Collaborate />

										</span>
										<span className="collab-text-con">
											<p className="collab-text">Let's collaborate on your upcoming project</p>
											<div className="collab-btn"
												style={{ background: cardColor, color: "#000" }}
												onMouseEnter={() => setBtnActive(true)}
												onMouseLeave={() => setBtnActive(false)}
											>
												<span>Let's collaborate</span>
												<IoIosArrowRoundForward className={`collab-arrow ${btnActive ? "btn-active" : ""}`} />

											</div>
										</span>
									</div>
								</div>


							</div>



						</div>

					</div>


				</section>

				<section className="project-panel p-four">

					<div className="footer">

						<Footer />

					</div>



				</section>




			</div>

		)




	}




	return content;

}

export default Projects;
