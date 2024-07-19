import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import SplitType from 'split-type';



gsap.registerPlugin(SplitType);



export const animateForm = () => {

    const contactForm = document.querySelector('.contact-card-form');
		
    const animateFormTl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.inOut", duration: 1 }

    });

    function showForm(){

        animateFormTl.clear();

        
        // console.log(techArray);

        animateFormTl.fromTo(contactForm,
            {
                opacity: 0.2,
                scale: 0.8
            },					
            {
            opacity: 1,
            scale: 1,
            visibility: "visible"

        })
    

        animateFormTl.play();
        

    }


    ScrollTrigger.create({
        trigger: contactForm,
        start: "top 75%",
        end: "top 70%",
        // markers: true,
        scrub: true,
        onEnter: () => showForm(),
        onEnterBack: () => {animateFormTl.pause()},
        onLeave: () => {animateFormTl.resume()},
        onLeaveBack: () => {animateFormTl.reverse()},
        toggleActions: "play pause resume reverse",
    
    });

    ScrollTrigger.refresh();
}





export const animateSocials = () => {

    const socials = document.querySelector('.contact-card-socials');
		
    const socialsTl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.inOut", duration: 1 }

    });

    function showCard(){

        socialsTl.clear();

        
        // console.log(techArray);

        socialsTl.fromTo(socials,
            {
                opacity: 0.2,
                scale: 0.8
            },					
            {
            opacity: 1,
            scale: 1,
            visibility: "visible"

        })
    

        socialsTl.play();
        

    }


    ScrollTrigger.create({
        trigger: socials,
        start: "top 75%",
        end: "top 70%",
        // markers: true,
        scrub: true,
        onEnter: () => showCard(),
        onEnterBack: () => {socialsTl.pause()},
        onLeave: () => {socialsTl.resume()},
        onLeaveBack: () => {socialsTl.reverse()},
        toggleActions: "play pause resume reverse",
    
    });

    ScrollTrigger.refresh();
}


export const animateContactCards = (ref) => {




	const contactNote = document.querySelectorAll('.contact-card-text');

    ref.current.forEach((contact, i) => {

			
        const tl = gsap.timeline({
            paused: true,
            defaults: { ease: "power3.inOut", duration: 1 }

        })

       


        function showContact(){

            tl.clear();

            const heading = SplitType.create(contactNote[i]);

            // console.log(techArray);

            tl.fromTo(contact,
                {
                    opacity: 0,
                    scale: 0.8
                },					
                {
                opacity: 1,
                scale: 1

            })
            .fromTo(heading.chars, 
                {
                    opacity: 0
                },
                
                {
                opacity: 1,
                duration: 0.5,
                stagger: 0.03
            })
       


            tl.play();
            

        }


        function pauseContact(){

            tl.pause();

        }
        function resumeContact(){

            tl.resume();

        }
        function hideContact(){

            tl.reverse();

        }


        
        

        ScrollTrigger.create({
            trigger: contact,
            start: "top 75%",
            end: "top 70%",
            // markers: true,
            scrub: true,
            onEnter: () => showContact(),
            onEnterBack: () => pauseContact(),
            onLeave: () => resumeContact(),
            onLeaveBack: () => hideContact(),
            toggleActions: "play pause resume reverse"
            // onLeave: () => gsap.to(self, {autoAlpha: 0, stagger: 0.1}),
        });


        ScrollTrigger.refresh();


    

    });

}


export const animateIntro = () => {
    
    const introH1 = document.querySelector('.intro-h1');
    const introP = document.querySelector('.intro-p');

    const heading1 = SplitType.create(introH1);
    const heading2 = SplitType.create(introP);

    let tl = gsap.timeline();

    tl.fromTo([heading1.words, heading2.words], 
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
              
            },
           
        }
    )

    return tl;
}