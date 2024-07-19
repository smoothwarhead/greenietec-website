import React from "react";
import "./homeform.css";

function Homeform() {
	return (
		<form className="home-form">
			<div className="inp">
				<div className="input">
					<label htmlFor="name">Full name</label>
					<input name="name" />
				</div>

				<div className="input">
					<label htmlFor="email">Email</label>
					<input name="email" />
				</div>
				<div className="input">
					<label htmlFor="budget">What's your budget</label>
					<select className="pro" name="budget">
						<option value="product"></option>
						<option value="less">less than $1000</option>
						<option value="more">more than $1000</option>
					</select>
				</div>
			</div>
			<div className="input">
				<label htmlFor="text">Tell us a little bit about your project</label>
				<textarea className="text" name="text" />
			</div>
			<div className="btn">
				<button className="attach">Attach file</button>
				<button className="submit">Submit</button>
			</div>
		</form>
	);
}

export default Homeform;
