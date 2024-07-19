import React from "react";
import Scroll from "../../components/scroll.js/Scroll";
import "./project.css";
import ProjectCards from "./projectcards/ProjectCards";
// import Footer from "../../components/footer/Footer";

function Projects() {
	return (
		<>
			<section>
				<div className="section-left"></div>
				<div className="section-right project">
					<Scroll />
					<ProjectCards />
				</div>
			</section>
			{/* <Footer /> */}
		</>
	);
}

export default Projects;
