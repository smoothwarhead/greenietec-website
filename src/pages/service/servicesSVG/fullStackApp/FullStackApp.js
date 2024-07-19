import React from "react";
import "./style.scss";
import { ReactComponent as Java } from "./fs/java.svg";
import { ReactComponent as Python } from "./fs/python.svg";
import { ReactComponent as Databasefs } from "./fs/databasefs.svg";
import { ReactComponent as Reactfs } from "./fs/react.svg";
import { ReactComponent as Nodejs } from "./fs/nodejs.svg";
import { ReactComponent as Angular } from "./fs/angular.svg";

function FullStackApp() {
	return (
		<div className="parent">
			<div className="mid">ASP.Net</div>
			<div className="circle">
				<Java />
			</div>
			<div className="circle">
				<Angular style={{ fill: "red" }} />
			</div>
			<div className="circle">
				<Nodejs style={{ fill: "#1d661d" }} />
			</div>
			<div className="circle">
				<Reactfs style={{ fill: "lightblue" }} />
			</div>
			<div className="circle">
				<Databasefs style={{ fill: "grey" }} />
			</div>
			<div className="circle">
				<Python />
			</div>
		</div>
	);
}

export default FullStackApp;
