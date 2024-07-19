import React from "react";
import "./projectcard.css";

function ProjectCard(props) {
	return (
		<div className="ProjectCard">
			<div className="card-number">{props.number}</div>
			<h1 className="card-title"> {props.title} </h1>
			<div className="card-picture"> {props.src} </div>
		</div>
	);
}

export default ProjectCard;
