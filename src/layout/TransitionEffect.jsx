import React, { useState, useRef, useContext, useEffect } from 'react';
import './transition.css';
import { useGSAP } from '@gsap/react';
import TransitionContext from '../context/TransitionContext';
import SessionManager from '../utils/SessionManager';
import { useLocation } from 'react-router-dom';
import { loader, pageSwitch } from './animateTransition';
import SplitType from 'split-type';
import gsap from 'gsap';




gsap.registerPlugin(SplitType);




const TransitionEffect = (props) => {

    const { pathName } = props;

    const { pageTransition } = useContext(TransitionContext);

 

    const [] = useState("");

    const effect = useRef();
    // const text = useRef();

    const location = useLocation();

    const prevLocation = SessionManager.getLocation();

    // const text = document.querySelector('.loader-wrap-heading');


    // console.log(pathName);

    // const heading = SplitType.create(text.current);


    

   


  


    useGSAP(() => {


        let text = document.querySelector('.loader-wrap .loader-wrap-heading'),
            heading = SplitType.create(text);
           
        
        if(location.pathname !== prevLocation){

            pageSwitch(pageTransition, effect, heading);
           

        }else{

      
            loader(pageTransition, effect, heading);
            

        }
       

    }, {scope: effect })






    return (

        <div className="loader-wrap" ref={effect}>
            <h1 className="loader-wrap-heading">{pathName}</h1>

        </div>
       
    )
}

export default TransitionEffect;