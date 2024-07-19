import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";
import "./projectcard.css";

const card = (content) => {
	return (
		<>
			<ProjectCard
				number={content.number}
				title={content.title}
				src={content.src}
				// key={content.key}
			/>
		</>
	);
};

function ProjectCards() {
	return <div className="project-grid">{ProjectData.map(card)}</div>;
}

export default ProjectCards;
