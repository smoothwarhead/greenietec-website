import gsap from 'gsap';
import React, { useContext, useEffect, useRef, useState } from 'react';
// import TransitionContext from '../../context/TransitionContext';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';

import './home.css';
import SplitType from 'split-type';
import ScrollContext from '../../context/ScrollContext';
import Homeform from './homeform/Homeform';
import { useLocation } from 'react-router-dom';
import TransitionContext from '../../context/TransitionContext';
import TransitionEffect from '../../layout/TransitionEffect';
import { scrollSections } from './homeAnimation';
import Footer from '../../component/footer/Footer';
import { FaArrowDownLong } from 'react-icons/fa6';
import { ViewContext } from '../../context/ViewContext';
import useFetch from '../../hooks/useFetch';
import { homeQuery } from '../../utils/contentClient';
import { classes, homeColors } from './homeUtils';
import HomeSkeleton from './HomeSkeleton';
import HomeFormModal from './modals/HomeFormModal';






gsap.registerPlugin(useGSAP, SplitType);








const Home = () => {

 

    const { data, isSuccess } = useFetch(homeQuery);

    let content;


    const { pageTransition, completed, setCompleted } = useContext(TransitionContext);
    const { header, mobileHeader } = useContext(ScrollContext);
    const { setLight, setDark, setBg, xl, setColor, loading, setLoading } = useContext(ViewContext);
    const [numOfSections, setNumOfSections] = useState(0);
    const [currentSection, setCurrentSection] = useState(1);

    const [openModal, setOpenModal] = useState(false);





    const homeScroller = useRef();
    const homeformRef = useRef();




    useEffect(() => {



        let bgColor = "linear-gradient(90deg, #081832 0%, #00040b 100%)";
        let color = "#cad6ec";

       


        gsap.set('.back-g', {
            background: bgColor,
            color: color,
            overwrite: "auto"
        });

       
        setDark("#081832");

        pageTransition.play();
        // setCompleted(false);
       


    }, [pageTransition, setBg, setColor, setDark, setLight])



    // if (loading && !completed) {
    //     content = (
         
    //         <div className="home-scroller" ref={homeScroller}>

    //            {!xl && <TransitionEffect pathName="Home" />}

    //         </div>
    //     )
    // };


    if (loading) {
        content = (
            <div className="home-scroller" ref={homeScroller}>
                {/* {!xl && <TransitionEffect pathName="Home" />} */}

                <HomeSkeleton />
            </div>
        )
    };




    useGSAP(() => {


        if (loading && !data) {
           
            return;
        } else {

            if(!loading && isSuccess){
      
                scrollSections(homeScroller, setNumOfSections, header, mobileHeader, setCurrentSection, setColor, setBg, xl);
    
            }else{
             
                return;
            }

          
        }

    }, { dependencies: [xl, loading, data, isSuccess], scope: homeScroller });




    if (!loading && isSuccess){

      
        const items = data?.homeCollection.items;

        content = (


            <>
                <HomeFormModal
                    openModal = {openModal}
                    setOpenModal = {setOpenModal}

                />

                <div className="home-scroller" ref={homeScroller}>



                    {
                        [...items].reverse().map((item, i) => (
                            <section className={`${classes[(i + 1).toString()]} panel`} data-bgcolor={homeColors[`${(i + 1).toString()}`]["data-bgcolor"]} data-textcolor={homeColors[`${(i + 1).toString()}`]["data-textcolor"]}
                                key={i}
                            >
                                <div className="outer">
                                    <div className="inner">
                                        <div className="bg one">
                                            <div className="bg-content">
                                                <div className="section-up">
                                                    <div className={`devh1 text-${i + 1}`}>{item.topHeading}</div>
                                                </div>

                                                <div className="section-btm">
                                                    <div className={`devh2 text-${i + 1}`}>{item.subHeading}</div>

                                                    <p className={`devp text-${i + 1}`}>
                                                        {item.note}
                                                    </p>

                                                    {i === 0 &&
                                                        <div className="scroll-indicator-1">
                                                            <span>Scroll Down</span>

                                                            <FaArrowDownLong />


                                                        </div>
                                                    }

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>

                        ))
                    }


                    <section className="sixth panel" data-bgcolor="linear-gradient(100deg, #204860 0%, #00040b 100%)" data-textcolor="#b1bfd8">
                        <div className="outer">
                            <div className="inner">
                                <div className="bg form-home">
                                    <div className="bg-content">
                                        <div className="section-up-flex text-6">

                                            <span className='flex-h1'>Let's get started today!</span>
                                            <p className='flex-p'>
                                                Share your business goal and we will take care of its entire
                                                development process. From strategic planning to deployment and
                                                maintenance.
                                            </p>

                                        </div>

                                        <div className="section-btm-flex">
                                            <div className="home-form-con">


                                                <Homeform
                                                    homeformRef={homeformRef}

                                                />

                                            </div>

                                            <div className="form-pop-up">
                                                <div className="pop-up-btn"
                                                    onClick={() => setOpenModal(true)}
                                                >
                                                    Get started
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="seventh panel" data-bgcolor="linear-gradient(100deg, #081832 0%, #00040b 100%)" data-textcolor="#ffffff">
                        <div className="outer">
                            <div className="inner">
                                <div className="bg footer">
                                    <Footer />


                                </div>
                            </div>
                        </div>
                    </section>




                    <div className="scroll-indicator-2">

                        {(completed || xl) &&

                            <div className="scroll-tracker">
                                <span>{`0${currentSection + 1 > numOfSections - 1 ? numOfSections - 1 : currentSection + 1}`}</span>
                                <span className="tracker-line"></span>
                                <span> {`0${numOfSections - 1}`}</span>
                            </div>

                        }

                    </div>





                </div>
            </>
        )

    }



    return content;



}

export default Home;