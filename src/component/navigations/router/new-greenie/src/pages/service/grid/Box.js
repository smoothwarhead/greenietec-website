import React from "react";
import { Link } from "react-router-dom";
import "./box.css";
// import RotatedArrow from "../servicesSVG/RotatedArrow";

function Box(props) {
	return (
		<div className="box">
			<div className="box-container">
				<div className="display">
					<div className="asp">{props.image}</div>
				</div>
				<div className="box-letter">
					<div className="numbering-card">{props.nub} </div>
					<h2 className="box-header">{props.header}</h2>
					<p className="box-text">{props.desp}</p>
					<Link className="box-btn">
						<div className="rotated-square">
							<div className="line-container">
								<div className="arrow-line"></div>
								<div className="right-angle"></div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Box;
