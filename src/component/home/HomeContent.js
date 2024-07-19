// import { useRef } from 'react';
import '../styles/home.css'
// import { gsap } from 'gsap';
// import { useEffect } from 'react';


const HomeContent = (props) => {

    const {bigText, para, index} = props;


    // const tl = useRef();
	


	// useEffect(() => {

	// 	tl.current = gsap.timeline({ defaults: { ease: "power4.inOut"}});

	// 	tl.current.to('.devh1', { 
	// 		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
	// 		opacity: 1,
	// 		y: 0,
	// 		stagger: 0.02,
	// 		duration: 1
	// 	})
    //     .to('.devh2', {
	// 		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
	// 		opacity: 1,
	// 		y: 0,
	// 		stagger: 0.02,
	// 	}, "-=0.5")
	// 	.to('.devp', {
	// 		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
	// 		opacity: 1,
	// 		y: 0,
	// 		stagger: 0.02,
	// 	}, "-=0.5")
	// 	.to('.learn-more-btn', {
	// 		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
	// 		opacity: 1,
	// 		y: 0,
	// 	}, "-=0.5")
		

	// }, [])



  return (
    <>

<>
			<section className={`page-intro home-intro y-100 intro-${index + 1}`}>					
					
				<div className="home-section-up">
					<div className="page-intro-title home-intro-title">{bigText}</div>
				</div>

				<div className="home-section-btm">

					{props.mediumText && <div className="learn-more-btn">{props.mediumText}</div>}

					<p className="page-intro-text home-intro-text">
						{para}
					</p>

					{props.btnText && <div className="learn-more-btn">{props.btnText}</div>}



				</div>				
			</section>
		</>


    </>
  )
}

export default HomeContent