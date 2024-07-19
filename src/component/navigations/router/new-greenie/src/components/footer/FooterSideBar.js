import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../assets/svgs/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svgs/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/svgs/linkedin.svg";

const FooterSideBar = () => {
  return (
    <>
        <div className="section-left footer-side-bar">
            <Link className="footer-logo" to="../">
                    greenietec
            </Link>

            <div className="social">
                <h2 className="social-h2">Follow us</h2>
                <ul className="social-links">
                    <li className="social-links-li">
                        <Link className="social-icon" to="./">
                            <Facebook />
                        </Link>
                    </li>
                    <li className="social-links-li">
                        <Link className="social-icon" to="./">
                            <Instagram />
                        </Link>
                    </li>
                    <li className="social-links-li">
                        <Link className="social-icon" to="./">
                            <Linkedin />
                        </Link>
                    </li>
                </ul>
            </div>


        </div>
    
    </>
  )
}

export default FooterSideBar