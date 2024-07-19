import React from "react";
// import Scroll from "../../components/scroll.js/Scroll";
import "./contact.css";
import ContactSection1 from "./contactsections/ContactSection1";
import ContactSection2 from "./contactsections/ContactSection2";
import ContactSection3 from "./contactsections/ContactSection3";
// import Contactform from "./contactform/Contactform";
// import Footer from "../../components/footer/Footer";

function Contact() {
	return (
		<div className="contact">
			<ContactSection1 />
			<ContactSection2 />
			<ContactSection3 />
		</div>
	);
}

export default Contact;
