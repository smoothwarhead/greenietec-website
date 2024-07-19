import SplitType from 'split-type';
import gsap from 'gsap';



gsap.registerPlugin(SplitType)

export const pageSwitch = (pageTransition, effect, heading) => {



    pageTransition.fromTo(effect.current,

        {
            top: "100%",

        },
        {
            top: "0%",
            duration: 1,
            ease: "power3.inOut",

        },
    )


    let textTl = gsap.timeline({
        ease: "power3.inOut",
        duration: 0.75,
        onComplete: () => { removeTransition() }
    });



    textTl.fromTo(heading.chars,
        {
            opacity: 0
        },

        {
            opacity: 1,
            stagger: 0.03
        }
    );



    pageTransition.add(textTl);

    function removeTransition() {

        gsap.to(effect.current, {

            top: "-100%",
            duration: 1

        })

    }



};


export const loader = (pageTransition, effect, heading) => {



    pageTransition.to(effect.current,

        {
            top: "0%",
            duration: 1,
            ease: "power3.inOut",

        },
    )


    let textTl = gsap.timeline({
        ease: "power3.inOut",
        duration: 0.75,
        onComplete: () => { removeTransition() }
    });


    
    textTl.fromTo(heading.chars,
        {
            opacity: 0
        },

        {
            opacity: 1,
            stagger: 0.03
        }
    );
    



    pageTransition.add(textTl);

    function removeTransition() {

        gsap.to(effect.current, {

            top: "-100%",
            duration: 1

        })

    }




}