import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import SplitType from 'split-type';
import Observer from "gsap/Observer";





export const animateHomeIntro = () => {

    const introH1 = document.querySelector('.section-up .devh1');
    const introP = document.querySelector('.section-btm .devp');

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





export const scrollSections = (ref, setNumOfSections, header, mobileHeader, setCurrentSection, setColor, setBg, xl, loading) => {

  
    if(loading)return;

        
        let sections = document.querySelectorAll(".panel"),
            images = document.querySelectorAll(".bg"),
            
            outerWrappers = gsap.utils.toArray(".outer"),
            innerWrappers = gsap.utils.toArray(".inner"),
            bg = document.querySelector(".back-g"),

           
            currentIndex = -1,
            wrap = gsap.utils.wrap(0, sections.length),
            animating;

        let headings = gsap.utils.toArray('.bg-content .devh1'),
            splitHeadings = headings.map(heading => SplitType.create(heading));


        let headings2 = gsap.utils.toArray('.bg-content .devh2'),
            splitHeadings2 = headings2.map(heading => SplitType.create(heading));

        let headings3 = gsap.utils.toArray('.bg-content .devp'),
            splitHeadings3 = headings3.map(heading => SplitType.create(heading));

        let flexHeading = gsap.utils.toArray('.flex-h1'),
            splitFlexHeading = SplitType.create(flexHeading);
            // splitFlexHeading = flexHeading.map(heading => SplitType.create(heading));

        let flexPara = gsap.utils.toArray('.flex-p'),
            splitFlexPara = SplitType.create(flexPara);

            setNumOfSections(sections.length);

        




        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });



        function gotoSection(index, direction, isScrollingDown) {


            if ((index === sections.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
                // intentObserver.disable(); // resume native scroll
                return;
            }

            if(index === sections.length - 1){
                console.log(xl);
                if(!xl){
                    gsap.to(header.current, {autoAlpha: 0, zIndex: -1, duration: 0.75});

                }else{
                    gsap.to(mobileHeader.current, {autoAlpha: 0, zIndex: -1, duration: 0.75});

                }
                
            }

            if(index < sections.length - 1 && !isScrollingDown){
                if(!xl){
                    gsap.to(header.current, {autoAlpha: 1, zIndex: 1000, duration: 6});


                }else{
                    gsap.to(mobileHeader.current, {autoAlpha: 1, zIndex: 1000, duration: 6});

                }
                
            }
            

            


            index = wrap(index); // make sure it's valid
            animating = true;
            let fromTop = direction === -1,
                dFactor = fromTop ? -1 : 1,
                tl = gsap.timeline({
                    defaults: { duration: 1, ease: "power3.inOut" },
                    onComplete: () => {
                        animating = false

                    }
                });

           

            let bgColor = sections[index].getAttribute("data-bgcolor");
            let color = sections[index].getAttribute("data-textcolor");

            setColor(color);

           

            if (currentIndex >= 0) {
               
                
                gsap.set(sections[currentIndex], { zIndex: 0 });
                gsap.set(".back-g", {
                    background: bgColor,                    
                    overwrite: "auto"
                });
                setBg(bgColor);

               
                    tl.to(images[currentIndex], { yPercent: -15 * dFactor })
                    .set(sections[currentIndex], { autoAlpha: 0 })
                    // .set(header.current, { opacity: 1, zIndex: 3, duration: 0.1 });

            }


           
         

            gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
            

            if(bg){
                gsap.set(bg, {
                    background: bgColor,            
                    overwrite: "auto"
                });

                setBg(bgColor);



            }
            

            tl.fromTo(outerWrappers[index], {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 0.3
            })
            tl.fromTo([outerWrappers[index], innerWrappers[index]], {
                yPercent: i => i ? -100 * dFactor : 100 * dFactor
            }, {
                yPercent: 0
            }, 0.5)



            if (images[index].className.includes('form-home')) {
                // gsap.set(header.current, {zIndex: 1000});
               
                tl.fromTo(images[index], { yPercent: 150 * dFactor }, { yPercent: 0 }, 0.5)

                tl.fromTo(splitFlexHeading.words, {
                    autoAlpha: 0,
                    yPercent: 150 * dFactor
                }, {
                    autoAlpha: 1,
                    yPercent: 0,
                    duration: 1,
                    ease: "power2",
                    stagger: {
                        each: 0.03,
                       
                    }
                }, 0.6)

                .fromTo(splitFlexPara.words, {
                    autoAlpha: 0,
                    yPercent: 150 * dFactor
                }, {
                    autoAlpha: 1,
                    yPercent: 0,
                    duration: 1,
                    ease: "power2",
                    stagger: {
                        each: 0.02,
                   
                    }
                }, 0.75)
                .to(ref.current, {
                    opacity: 1,
                    // zIndex: -1,
                    duration: 1

                }, 1.25)


            } else {

                if (!images[index].className.includes('footer')) {

                    tl.fromTo(images[index], { yPercent: 150 * dFactor }, { yPercent: 0 }, 0.5)

                        .fromTo(splitHeadings[index].words, {
                            autoAlpha: 0,
                            yPercent: 150 * dFactor
                        }, {
                            autoAlpha: 1,
                            yPercent: 0,
                            duration: 1,
                            ease: "power2",
                            stagger: {
                                each: 0.03,
                                from: "random"
                            }
                        }, 0.6)

                    if (!images[index].className.includes('one')) {
                        tl.fromTo(splitHeadings2[index].words, {
                            autoAlpha: 0,
                            yPercent: 150 * dFactor
                        }, {
                            autoAlpha: 1,
                            yPercent: 0,
                            duration: 1,
                            ease: "power2",
                            stagger: {
                                each: 0.02,
                                // from: "random"
                            }
                        }, 1.25)
                    } else {
                        if(splitHeadings2.length === 0) return;
                        // console.log(splitHeadings2[index])
                        // tl.to(splitHeadings2[index], {
                        //     display: "none"
                        // })

                    }


                    tl.fromTo(splitHeadings3[index].words, {
                        autoAlpha: 0,
                        yPercent: 150 * dFactor
                    }, {
                        autoAlpha: 1,
                        yPercent: 0,
                        duration: 1,
                        ease: "power2",
                        stagger: {
                            each: 0.02,
                            // from: "random"
                        }
                    }, 1);


                } else {

                    
                    tl.fromTo(images[index],
                        {
                            yPercent: 150 * dFactor,
                            display: "flex"


                        },
                        {
                            yPercent: 0,
                            display: "block"


                        })
                        


                }



            }





            currentIndex = index;
            setCurrentSection(currentIndex);




        };



        Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => !animating && gotoSection(currentIndex - 1, -1, false),
            onUp: () => !animating && gotoSection(currentIndex + 1, 1, true),
            tolerance: 10,
            preventDefault: true,
            


            
        });

      


        gotoSection(0, 1);

        

}













// function showFooter (footer, intentObserver, setScrollPage) {

 

//     let footerTl = gsap.timeline({
//         ease: "power3.inOut",
//         duration: 0.75,
//         onComplete: () => {
//             intentObserver.disable(); // resume native scroll
//             setScrollPage(false);
        
//         }

//     });

//     footerTl.fromTo(footer.current,
//         {
//             opacity: 0,
//             top: "100%"

//         },

//         {
//             opacity: 1,
//             top: "0%"
//         }
//     );



// }





// export function hideFooter (footer, setScrollPage) {

//     // intentObserver.enable();

//     Observer.create({
//         target: footer.current,
//         type: "wheel, touch",
//         onUp: () => hide(),
//         onDown: () => {console.log("down")}

//     })


//     const hide = () => {

//         let footerTl = gsap.timeline({
//             ease: "power3.inOut",
//             duration: 0.75,
//             onComplete: () => {setScrollPage(true)}
//         });
    
//         footerTl.fromTo(footer.current,
//             {
//                 opacity: 1,
//                 top: "0%"
    
//             },
    
//             {
//                 opacity: 0,
//                 top: "100%"
//             }
//         );

//     }

  
// }





     //arrow animation
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //  const arrows = document.querySelectorAll(".arrow");

    //  if (arrows) {

    //      gsap.set(arrows[1], {
    //          yPercent: -100
    //      });

    //      const tl = gsap.timeline({
    //          repeat: -1,
    //          repeatDelay: 1
    //      });

    //      tl.to(arrows[0], {
    //          yPercent: 100
    //      });

    //      tl.to(
    //          arrows[1],
    //          {
    //              yPercent: 0
    //          },
    //          0
    //      );

    //  }