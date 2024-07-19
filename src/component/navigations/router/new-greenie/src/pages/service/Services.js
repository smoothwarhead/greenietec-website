import React from "react";
// import Scroll from "../../components/scroll.js/Scroll";
// import Gridcard from "./grid/Gridcard";
// import Illustration from "./illustration/Illustration";
import "./services.css";
import ServiceSection1 from "./servicesection/ServiceSection1";
import ServiceSection2 from "./servicesection/ServiceSection2";
import ServiceSection3 from "./servicesection/ServiceSection3";
// import { motion } from "framer-motion";
// import RotatedArrow from "./servicesSVG/rotatedArrow/RotatedArrow";

function Services() {
	return (
		<div className="service">
			<ServiceSection1 />
			<ServiceSection2 />
			<ServiceSection3 />
		</div>
	);
}

export default Services;
