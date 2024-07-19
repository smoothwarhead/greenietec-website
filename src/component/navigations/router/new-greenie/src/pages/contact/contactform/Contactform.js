import React from "react";
import "./contactform.css";

function Contactform() {
	return (
		<div>
			<form className="contact-form">
				<div className="contact-form-inp">
					<div className="contact-form-input">
						<label htmlfor="name">Full name</label>
						<input placeholder="Full name" name="name" />
					</div>
					<div className="contact-form-input">
						<label htmlfor="email">Email</label>
						<input placeholder="Email" name="email" />
					</div>
					<div className="contact-form-input">
						<label htmlfor="inquiry">General inquiry</label>
						<select className="pro" name="inquiry">
							<option value="product"></option>
							<option value="less">less than $1000</option>
							<option value="more">more than $1000</option>
						</select>
					</div>
				</div>
				<div className="contact-form-input">
					<label htmlfor="message">Message</label>
					<textarea
						name="message"
						placeholder="Please type your message here"
						className="text"
					/>
				</div>
				<div className="contact-form-btn">
					<button className="contact-form-sub">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Contactform;
