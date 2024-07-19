import React from 'react'
import { Link } from 'react-router-dom';
import { PiCopyright } from "react-icons/pi";

const FooterBody = () => {
  return (
    <div className='footer-body'>

        <div className="footer-body-1">

            <Link to="/contact" className="f-el-1-btn">Hire us</Link>

            <Link to="/about" className="f-el-1-btn">About us</Link>



        </div>

        <div className="footer-body-2">
            <div>
              Copyright <PiCopyright className='copyright-icon' /> {`${new Date().getFullYear()}`} greenietec software, Inc. All rights reserved.

            </div>
        </div>

    </div>
  )
}

export default FooterBody