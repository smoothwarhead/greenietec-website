import { createContext, useEffect, useRef, useState } from 'react';


export const ScrollContext = createContext({});


export const ScrollProvider = ({ children }) => {

    

    const main = useRef();
    const scroller = useRef();
    const footerCon = useRef();
    const footerRef = useRef();
    const canvas = useRef(); 
    const bg = useRef();
    const header = useRef();
    const  mobileHeader = useRef();
    const [lastIndex, setLastIndex] = useState(0);
    const [scrollFooter, setScrollFooter] = useState(false);

	const homeRef = useRef();
    


    return (
        <ScrollContext.Provider value={{ 
          
            scroller,
  
            homeRef,
            main,
            footerCon,
            footerRef,
            canvas, bg, header,
    
            lastIndex,  setLastIndex,
            scrollFooter, setScrollFooter,
            mobileHeader

          }}
        >
            {children}
        </ScrollContext.Provider>
    )

}


export default ScrollContext;

