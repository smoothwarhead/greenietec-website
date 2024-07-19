import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../facebook.svg";
import { ReactComponent as Instagram } from "../instagram.svg";
import { ReactComponent as Linkedin } from "../linkedin.svg";

function ContactSection3() {
	return (
		<>
			<section>
				<div className="section-left"></div>
				<div className="section-contact-3">
					<p className="contact-p">Alternatively, Contact us at:</p>
					<div className="contact-div">
						<div className="address">EMAIL</div>
						<div className="cont-add">greenietec@yahoo.com</div>
					</div>
					<div className="contact-div">
						<div className="address">PHONE</div>
						<div className="cont-add">612 - 518 - 2391</div>
					</div>
					<div className="contact-div">
						<div className="address">ADDRESS</div>
						<div className="cont-add">
							5214 10th Avenue South Minneapolis, MN, 55417
						</div>
					</div>
					<div className="contact-social">
						<Link className="contact-img" to="./">
							<Facebook />
						</Link>
						<Link className="contact-img" to="./">
							<Instagram />
						</Link>
						<Link className="contact-img" to="./">
							<Linkedin />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default ContactSection3;
