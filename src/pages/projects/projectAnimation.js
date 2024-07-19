import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import SplitType from 'split-type';



export const animateIntro = () => {

    const introH1 = document.querySelector('.intro-section .intro-h1');
    const introP = document.querySelector('.intro-section .intro-p');

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
};


export const animateSectionTwo = (ref) => {

    const Hs = document.querySelectorAll('.p-c-1-mid');

    const techs = document.querySelectorAll('.p-c-2-techs-1');

    // console.log(ref)

    ref.current.forEach((project, i) => {

        

        const tl = gsap.timeline({
            paused: true,
            defaults: { ease: "power3.inOut", duration: 1 }

        })

        const techArray = gsap.utils.toArray(techs[i].children);


        function showProject() {

            tl.clear();

            const heading = SplitType.create(Hs[i]);

            // console.log(techArray);

            tl.fromTo(project,
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
                .fromTo(techArray,
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


        function pauseProject() {

            tl.pause();

        }
        function resumeProject() {

            tl.resume();

        }
        function hideProject() {

            tl.reverse();

        }





        ScrollTrigger.create({
            trigger: project,
            start: "top 75%",
            end: "top 70%",
            // markers: true,
            scrub: true,
            onEnter: () => showProject(),
            onEnterBack: () => pauseProject(),
            onLeave: () => resumeProject(),
            onLeaveBack: () => hideProject(),
            toggleActions: "play pause resume reverse"
            // onLeave: () => gsap.to(self, {autoAlpha: 0, stagger: 0.1}),
        });


        ScrollTrigger.refresh();




    });
};


export const animateSectionThree = () => {

    const collab = document.querySelector('.collab-card');
    const collabText = document.querySelector('.collab-text');


    const animateCollab = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.inOut", duration: 1 }

    });

    function showCollab(){

        animateCollab.clear();

        const heading = SplitType.create(collabText);

        // console.log(techArray);

        animateCollab.fromTo(collab,
            {
                opacity: 0.2,
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
            stagger: 0.02
        })
    


        animateCollab.play();
        

    }


    ScrollTrigger.create({
        trigger: collab,
        start: "top 75%",
        end: "top 70%",
        // markers: true,
        scrub: true,
        onEnter: () => showCollab(),
        onEnterBack: () => {animateCollab.pause()},
        onLeave: () => {animateCollab.resume()},
        onLeaveBack: () => {animateCollab.reverse()},
        toggleActions: "play pause resume reverse",
    
    });


    ScrollTrigger.refresh();

};

