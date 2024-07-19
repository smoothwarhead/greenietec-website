import React from 'react'
import { Link } from 'react-router-dom';
import { PiCopyright } from "react-icons/pi";


const MobileFooterBody = () => {



    return (
        <div className='m-footer-body'>

            <div className="m-f-btns">
                <Link to="/contact" className="m-f-btn">Hire us</Link>

                <Link to="/about" className="m-f-btn">About</Link>


            </div>

            <div className="m-socials">
                <ul className="social-links">
                    <li className="social-links-li">
                        <Link className="social-icon" to="/">
                            Facebook
                        </Link>
                    </li>
                    <li className="social-links-li">
                        <Link className="social-icon" to="/">
                            Instagram
                        </Link>
                    </li>
                    <li className="social-links-li">
                        <Link className="social-icon" to="/">
                            X
                        </Link>
                    </li>
                </ul>

            </div>

            <div className="m-copy">
                <div>
                Copyright <PiCopyright className='copyright-icon' /> {`${new Date().getFullYear()}`} greenietec software, Inc. All rights reserved.

                </div>

            </div>

        </div>
    )
}

export default MobileFooterBody