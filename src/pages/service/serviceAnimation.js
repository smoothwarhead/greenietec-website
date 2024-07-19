import gsap from "gsap";
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




gsap.registerPlugin(SplitType);



export const animateIntro = () => {

    let heading1 = document.querySelector('.section-up .devh1'),
        splitHeading1 = SplitType.create(heading1);

    let para1 = document.querySelector('.section-btm .devp'),
        splitPara1 = SplitType.create(para1);


    let tl = gsap.timeline();

    tl.fromTo([splitHeading1.words, splitPara1.words],
        {
            autoAlpha: 0,
            yPercent: 60
        },
        {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            delay: 0.1,
            ease: "power3.inOut",
            stagger: {
                each: 0.02,
                // from: "random"
            },
            // onComplete: () => {

            // 	setCompleted(false);

            // }

        }

    );

    return tl;

}



export const animateSectionTwo = () => {



    let heading2 = document.querySelector('.inner-1 .flex-h1'),
        splitHeading2 = SplitType.create(heading2);

    let para2 = document.querySelector('.inner-1 .flex-p'),
        splitPara2 = SplitType.create(para2);




    let section = document.querySelector('.service-two');

    gsap.set([splitHeading2.words, splitPara2.words], { autoAlpha: 0, yPercent: 60 });
    // gsap.set('.diagram', { autoAlpha: 0, scale: 0 });

    let animation = gsap.timeline()
    .to([splitHeading2.words, splitPara2.words],

        {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.75,
            // delay: 0.1,
            ease: "power3.inOut",
            stagger: {
                each: 0.02,
                // from: "random"
            },


        }
    )
    .to('.diagram',

        {
            opacity: 1,
            scale: 1,
            ease: "power3.inOut",

        }
    )


    ScrollTrigger.create({
        trigger: section,
        start: "top 90%",
        end: "center 80%",
        animation,
        scrub: true,
        // markers: true
        
    })



}

export const animateSectionThree = (ref) => {
    
		let tl = gsap.timeline();

		ref.current.forEach((service, i) => {

			tl.to(service, {
				opacity: 1,
				scale: 1,
				scrollTrigger: {
					trigger: service,
					start: "top 80%",
					end: "top 78%",
					scrub: true,
					pin: true,
					invalidateOnRefresh: true,

				}
			})
		})


}