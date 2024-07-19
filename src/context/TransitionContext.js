import gsap from 'gsap';
import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const TransitionContext = createContext({ completed: false });



export const TransitionProvider = ({ children }) => {

    const [completed, setCompleted] = useState(false);
    const [pathName, setPathName] = useState(false);
    const [navCompleted, setNavCompleted] = useState(false);


    const pageTransition = gsap.timeline({
        paused: true,
        onComplete: () => {
            document.body.style.overflow = 'visible';
            setCompleted(true);
           
        }
    });

    const navTransition = gsap.timeline({
        defaults: {
            ease: "power4.in",
            duration: 0.75
        },
        paused: true,
    });


    



    return (
        <TransitionContext.Provider 
            value={{
              
                completed,
                setCompleted,
                pageTransition,
                pathName, setPathName,
                navCompleted, setNavCompleted,
                navTransition
             
            }}
        
        >

            {children}

        </TransitionContext.Provider>
    )



};


export default TransitionContext;