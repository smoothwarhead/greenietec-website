import { Link } from "react-router-dom";
import { ReactComponent as SvgIcon } from "../../assets/svgs/logo.svg";




const FooterSideBar = () => {
  return (
    <>
        <div className="section-left footer-side-bar">
           
            <div className="f-1-1">
                <Link className="f-logo" to="/" >
                    <div className="f-logo-pic">
                        <SvgIcon />
                    </div>
                    <div className="f-logo-text">greenietec software</div>
                </Link>
            </div>

            <div className="f-1-2">

                <span className='f-heading-1'>
                    Let's have an impact together
                </span>

            </div>

            <div className="f-1-3">

                <div className="social">
                    {/* <h2 className="social-h2">Follow us</h2> */}
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
                   
            </div>

           


        </div>
    
    </>
  )
}

export default FooterSideBar