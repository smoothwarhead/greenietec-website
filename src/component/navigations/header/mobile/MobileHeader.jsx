import { useContext, useState } from 'react';
import './mobile-header.css';
import ScrollContext from '../../../../context/ScrollContext';
import { Link } from 'react-router-dom';
import { ReactComponent as SvgIcon } from "../../../../assets/svgs/logo.svg";
import Menubar from '../menubar/Menubar';
import MenuSlide from './menuslide/MenuSlide';
import { ViewContext } from '../../../../context/ViewContext';


const MobileHeader = () => {

	const { light, dark, bg, loading } = useContext(ViewContext);
	const {  mobileHeader } = useContext(ScrollContext);
	// const { color } = useContext(ViewContext);

    const [openMenu, setOpenMenu] = useState(false);




  return (

    <>
        <MenuSlide 
            openMenu={openMenu} 
            setOpenMenu={setOpenMenu}z
            
        />

        <div className="mobile-header" ref={mobileHeader} style={!openMenu ? {background: bg} : {background: "transparent"}}>
            
                <Link className="mobile-logo" to="/">
                    <div className="mobile-logo-pic">
                        <SvgIcon fill={loading ? "#fff"  : !openMenu ? light : dark } />
                    </div>
                    <div className="mobile-logo-text" style={loading ? {color: "#fff"} : !openMenu ? {color: light} : {color: dark}}>greenietec software</div>
                </Link>

                <div className="mobile-navbar">

                    <Menubar                        
                        openMenu={openMenu} 
                        setOpenMenu={setOpenMenu}

                    />


                </div>
        </div>
    </>
  )
}

export default MobileHeader