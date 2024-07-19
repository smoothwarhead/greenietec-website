import { createContext, useState } from 'react';


export const NavContext = createContext({});


export const NavProvider = ({ children }) => {

    

    const [slideMenu, setSlideMenu] = useState(false);
    const [isDark, setisDark] = useState(false);
   



    return (
        <NavContext.Provider value={{ 
          
            slideMenu, 
            setSlideMenu,
            isDark, 
            setisDark
            

          }}
        >
            {children}
        </NavContext.Provider>
    )

}


export default NavContext;

