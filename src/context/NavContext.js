import { createContext, useState } from 'react';
import { navigations } from '../component/navigations/header/navigations';


export const NavContext = createContext({});


export const NavProvider = ({ children }) => {

    

    const [slideMenu, setSlideMenu] = useState(false);
    const [isDark, setisDark] = useState(false);
    const [navs, setNavs] = useState(navigations);



    return (
        <NavContext.Provider value={{ 
          
            slideMenu, 
            setSlideMenu,
            isDark, 
            setisDark,
            navs, setNavs            

          }}
        >
            {children}
        </NavContext.Provider>
    )

}


export default NavContext;

