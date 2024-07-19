import React from "react";
import { ReactComponent as RotateArrow } from "./rotateArrow.svg";
import "./rotate-arrow.css";

function RotatedArrow() {
	return (
		<div className="rotated-arrow">
			<RotateArrow />
		</div>
	);
}

export default RotatedArrow;
