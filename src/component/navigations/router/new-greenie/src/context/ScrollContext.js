import { createContext, useRef } from 'react';


export const ScrollContext = createContext({});


export const ScrollProvider = ({ children }) => {

    

    const main = useRef();
    const scroller = useRef();

	const homeRef = useRef();

    homeRef.current = null;


	const sections = useRef([]);
    sections.current = [];

    const addToSections = (el) => {
        if(el && !sections.current.includes(el)){
            sections.current.push(el);
		}
    }

    const setHomeRef = (el) => {
        homeRef.current = el
    }

   



    return (
        <ScrollContext.Provider value={{ 
          
            scroller,
            sections,
            addToSections,
            homeRef,
            setHomeRef,
            main

          }}
        >
            {children}
        </ScrollContext.Provider>
    )

}


export default ScrollContext;

