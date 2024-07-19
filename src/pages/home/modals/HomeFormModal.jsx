import { useContext, useEffect, useRef } from 'react';
import './homeFormModal.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Homeform from '../homeform/Homeform';
import { ViewContext } from '../../../context/ViewContext';

const HomeFormModal = (props) => {



    const { openModal, setOpenModal } = props;

	const {light} = useContext(ViewContext);


    const overlayRef = useRef(null);
    const modalRef = useRef(null);
    const tl = useRef(null);


    useGSAP(() => {


        tl.current = gsap.timeline({
            defaults: {
                ease: "power4.in",
                duration: 0.75
            },
            paused: true,
        });

        tl.current.to(overlayRef.current, {
            opacity: 1,
            display: "block"

        })






    }, { scope: overlayRef });




    useEffect(() => {

        openModal ? tl.current.play() : tl.current.reverse()

    }, [openModal]);





    return (
        <div className='panel-modal' ref={overlayRef}>
            <div className="panel-modal-con" ref={modalRef}>

                <div className="modal-header">
                    <div className="modal-return"
                        style={{ color: light }}
                        onClick={() => setOpenModal(false)}
                    >Back</div>
                </div>

                <div className="modal-body">
                    <Homeform />

                </div>


            </div>
        </div>
    )
}

export default HomeFormModal