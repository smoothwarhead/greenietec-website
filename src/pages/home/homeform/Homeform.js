import React, { useContext } from "react";
import "./homeform.css";
import ScrollContext from "../../../context/ScrollContext";
import { ViewContext } from "../../../context/ViewContext";

function Homeform(props) {


	const { homeformRef } = props;

	const {light} = useContext(ViewContext);


	return (
		<form className="home-form" ref={homeformRef} style={{color: light}}>
			
			<div className="inp">
				<div className="input-control">
					<label htmlFor="name">Full name</label>
					<input name="name" />
				</div>

				<div className="input-control">
					<label htmlFor="email">Email</label>
					<input name="email" />
				</div>

				<div className="input-control">
					<label htmlFor="budget">What's your budget</label>
					<select className="pro" name="budget">
						{/* <option value="product"></option> */}
						<option value="less">less than $1000</option>
						<option value="more">more than $1000</option>
					</select>
				</div>

			</div>


			<div className="input-control">
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
