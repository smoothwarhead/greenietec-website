import { useContext, useRef, useState, useEffect } from "react";
import "./contact.css";
import { contactData } from "./contactData";
import ContactCard from "./ContactCard";
import { ReactComponent as Facebook } from "../../assets/svgs/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svgs/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/svgs/linkedin.svg";
import Contactform from "./contactform/Contactform";
import { Link, useLocation } from "react-router-dom";
import TransitionEffect from "../../layout/TransitionEffect";
import { useGSAP } from "@gsap/react";
import { animateContactCards, animateForm, animateIntro, animateSocials } from "./animateContact";
import TransitionContext from "../../context/TransitionContext";
import gsap from "gsap";
import Footer from "../../component/footer/Footer";
import { ViewContext } from "../../context/ViewContext";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import ProjectSkeleton from "../projects/ProjectSkeleton";
import { contactQuery } from "../../utils/contentClient";






function Contact() {




	const { data, isSuccess } = useFetch(contactQuery);

	let content;


	const contactsScroller = useRef();

	const { setLight, setDark, setBg, xl, setColor, loading } = useContext(ViewContext);


	const { pageTransition, completed, setCompleted } = useContext(TransitionContext);

	const [contactsRef, setContactsRef] = useArrayRef();

	const [cardBg, setCardBg] = useState("");
	const [cardColor, setCardColor] = useState("");




	function useArrayRef() {
		const contactsRef = useRef([]);
		contactsRef.current = [];
		return [contactsRef, (ref) => ref && contactsRef.current.push(ref)]
	}






	useEffect(() => {

		let bgColor = "linear-gradient(90deg, #3c3a65 0%, #00040b 100%)";
		let color = "#9e9bce";

		setColor(color);
		setCardBg(bgColor);
		setCardColor(color);
		setLight(color);
		setDark("#3c3a65");
		setBg(bgColor);



		gsap.set(".back-g", {
			background: bgColor,
			color: color,
			overwrite: "auto"
		});

		pageTransition.play();
        // setCompleted(false);


	}, [pageTransition, setBg, setColor, setDark, setLight]);



	// if (loading && !completed) {
	// 	content = (
	// 		<div className="contacts-scroller" ref={contactsScroller}>
	// 			{!xl && <TransitionEffect pathName="Contact" />}
				
	// 		</div>
	// 	)
	// };



	if (loading) {
		content = (
			<div className="contacts-scroller" ref={contactsScroller}>
				
				<ProjectSkeleton />
			</div>
		)
	};






	useGSAP(() => {

		if (loading && !data) {
			return;
		} else {

			if (!loading && isSuccess) {

				//animate intro
				animateIntro();

				// animate form section
				animateForm();


				// animate contact options
				animateContactCards(contactsRef);

				// animate the socials section
				animateSocials();

			} else {
				return;
			}

		}



	}, { dependencies: [xl, loading, data, isSuccess], scope: contactsScroller })


	


	if (!loading && isSuccess) {


		const texts = data?.contactPageCollection.items[0];



		content = (
			<div className="contacts-scroller" ref={contactsScroller} style={{ color: cardColor }}>



				<section className="contact-panel c-one">

					<div className="contact-bg">

						<div className="contact-inner intro-section">
							<div className="intro-h1">
								{texts.topHeading}
							</div>

							<div className="intro-p">
								{texts.note}

							</div>


						</div>

					</div>



				</section>




				<section className="contact-panel c-two">

					<div className="contact-bg">

						<div className="contact-inner contact-con">

							<div className="contact-card contact-card-form" style={{ background: cardBg, color: cardColor }}>

								<div className="contact-card-header">Get in touch with us</div>

								<div className="contact-card-con contact-card-con-1">

									<Contactform
										cardColor={cardColor}
										cardBg={cardBg}
									/>

								</div>


							</div>



						</div>

					</div>


				</section>


				<section className="contact-panel c-three">

					<div className="contact-bg">


						<div className="contact-inner contact-con" >
							<span className="sub-intro-h1">
								Alternatively, Contact us at:
							</span>


							<ContactCard
								contact={texts.email}
								label="Email"
								icon= {<AiOutlineMail />}
								setContactsRef={setContactsRef}

							/>

							<ContactCard
								contact={texts.phone}
								label="Phone"
								icon= {<FaPhone />}
								setContactsRef={setContactsRef}

							/>

							<ContactCard
								contact={texts.address}
								label="Address"
								icon= {<MdLocationPin />}
								setContactsRef={setContactsRef}

							/>

							

						</div>

					</div>


				</section>

				<section className="contact-panel c-four" style={{ color: cardColor, fill: cardColor }}>

					<div className="contact-bg">

						<div className="contact-inner contact-con">

							<div className="contact-card contact-card-socials">

								<div className="contact-card-header">Socials</div>

								<div className="contact-card-con contact-card-con-1">

									<div className="contact-icons">
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

								</div>


							</div>






						</div>

					</div>


				</section>


				<section className="contact-panel c-five">

					<div className="footer">

						<Footer />

					</div>



				</section>




			</div>

		)


	}



	return content;
}

export default Contact;
