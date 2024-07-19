import { useContext, useEffect, useRef } from 'react';
import './slide.css';
import { gsap, Power1 } from 'gsap';

import { Link } from "react-router-dom";
import { ViewContext } from '../../../../../context/ViewContext';
import { useGSAP } from '@gsap/react';
import { Light } from 'three';
import NavContext from '../../../../../context/NavContext';
import TransitionContext from '../../../../../context/TransitionContext';



const MenuSlide = (props) => {

    const { openMenu, setOpenMenu } = props;
    const { isXl, light, dark, setBg, bg } = useContext(ViewContext);
    const { navs } = useContext(NavContext);
    // const { setNavCompleted } = useContext(TransitionContext);

    // const overlayRef = useRef(null);
    const menuRef = useRef(null);
    const tl = useRef(null);





    useGSAP(() => {

        const navLinks = gsap.utils.toArray('.m-nav-links');
        const socialLinks = gsap.utils.toArray('.m-soc-el');

        // console.log(navLinks);


        tl.current = gsap.timeline({
            defaults: {
                ease: "power4.in",
                duration: 0.75
            },
            paused: true,
        });

        tl.current.to(menuRef.current, {
            left: 0,

        })
        
        
         let linksTl = gsap.timeline({
            defaults: {
                ease: "power4.inOut",
                duration: 1
            }
    
        });
        
        
        linksTl.fromTo(navLinks,
            {
                y: 30,
                opacity: 0,
                skewY: -30

            },

            {
                y: 0,
                opacity: 1,
                skewY: 0,
                stagger: 0.03
            }
        )        
        .fromTo(socialLinks,
        {
            opacity: 0
        },

        {
            opacity: 1,
            stagger: 0.03
        })



        tl.current.add(linksTl);
       



    }, { scope: menuRef })




    useEffect(() => {

        openMenu ? tl.current.play() : tl.current.reverse()

    }, [openMenu]);

    // console.log(openMenu);



    return (
        <>



            <div className="mobile-menu-container"
                style={{ background: light, color: dark }}
                ref={menuRef}
            >
                <div className="mobile-menu-body">
                    <div className="m-links">
                        <ul>

                            {
                                navs.map((nav, i) => (
                                    <li key={i}>

                                        <Link
                                            to={nav.href}
                                            style={{ color: dark }}
                                            className='m-nav-links'
                                            onClick={() => {setOpenMenu(false)}}
                                            
                                        >
                                            {nav.name}
                                        </Link>

                                    </li>
                                ))
                            }

                        </ul>

                    </div>

                    <div className="m-socials">
                        <span className="m-soc-el">Facebook</span>
                        <span className="m-soc-el">Instagram</span>
                        <span className="m-soc-el">X</span>

                    </div>

                </div>


            </div>

        </>
    )
}

export default MenuSlide