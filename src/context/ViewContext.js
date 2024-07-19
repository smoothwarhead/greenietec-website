import { createContext, useEffect, useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery";




export const ViewContext = createContext({});



const ViewProvider = ({ children }) => {



    const[loading, setLoading] = useState(true);



    const[xl, setXl] = useState(false);
    const[medium, setMedium] = useState(false);

  
    const [light, setLight] = useState("");
    const [dark, setDark] = useState("");
    const [bg, setBg] = useState("");
    const [color, setColor] = useState("");

   

    const isMax1024 = useMediaQuery('(max-width: 1024px)');
    const isMax768 = useMediaQuery('(max-width: 768px)');
    const isMin0 = useMediaQuery('(min-width: 0px)');



    useEffect(() => {

        if(!color)return;
        setLight(color);

    }, [color]);


  
    useEffect(() => {

        if(isMax1024 && isMin0){
            setXl(true);

            if(isMax768 && isMin0){
                setMedium(true);
            }else{
                setMedium(false)
            }


        }else{
            setXl(false);
            setMedium(false);

        }

    }, [isMax1024, isMax768, isMin0]);
  



  


  return (
    <ViewContext.Provider value={{ 
        xl, setXl,
        medium, setMedium,
        bg, setBg,
        dark, setDark,
        light, setLight,
        color, setColor,
        loading, setLoading
    }}
    >
        {children}
    </ViewContext.Provider>
  )
}

export default ViewProvider;