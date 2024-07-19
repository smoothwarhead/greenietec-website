import { useState, useEffect, useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import TransitionContext from "../context/TransitionContext";



const useFetch = (query) => {

    const [data, setData] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    
    const {setLoading} = useContext(ViewContext);
    const {completed, setCompleted } = useContext(TransitionContext);

      


    const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
    const access = process.env.REACT_APP_CONTENTFUL_ACCESS_KEY;


    useEffect(() => {
        setLoading(true);

  
        const getData = async () => {

        
            if(!completed)return;
      

            fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${access}`
                },
                body: JSON.stringify({ query }),
            })
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if(errors){
                    console.error(errors);
                }  

                if(data){
                    setIsSuccess(true);
                    // setCompleted(false);
                    setData(data);
                    setLoading(false);
                }
                

            });

            
    
        }

      
        getData();

      


    }, [setData, query, setLoading, setIsSuccess, completed]);

   return {data, isSuccess};
    
}

export default useFetch;