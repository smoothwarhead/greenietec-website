import { Link } from "react-router-dom";
import { ReactComponent as SvgIcon } from "../../../assets/svgs/logo.svg";




const MobileFooterSideBar = () => {


    return (
        <div className='m-footer-sidebar'>

            <div className="m-f-1-1">
                <Link className="m-f-logo" to="/" >
                    <div className="m-f-logo-pic">
                        <SvgIcon />
                    </div>
                    <div className="m-f-logo-text">greenietec software</div>
                </Link>
            </div>

            <div className="m-f-1-2">

                <span className='m-f-heading-1'>
                    Let's have an impact together
                </span>

            </div>
        </div>
    )
}

export default MobileFooterSideBar;