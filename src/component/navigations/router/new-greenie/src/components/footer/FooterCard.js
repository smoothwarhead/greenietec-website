import React from "react";
import "../../styles/footercard.css";

function FooterCard(props) {
	return (
		<div className="footer-card">
			<h1>{props.title}</h1>
			<button className="footer-btn"> {props.text}</button>
		</div>
	);
}

export default FooterCard;
