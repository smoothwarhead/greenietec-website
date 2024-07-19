
import './footer.css';
import FooterSideBar from './FooterSideBar';
import FooterBody from './FooterBody';
import { useContext } from 'react';
import {ViewContext} from '../../context/ViewContext';
import MobileFooterSideBar from './mobile/MobileFooterSideBar';
import MobileFooterBody from './mobile/MobileFooterBody';





const Footer = () => {

   
  const { medium } = useContext(ViewContext); 


  return (

    <div className="footer-container">

      <div className="footer-elements f-1">

        { !medium ? <FooterSideBar /> : <MobileFooterSideBar />}

      </div>

      <div className="footer-elements f-2">

        { !medium ?  <FooterBody /> : <MobileFooterBody /> }

      </div>
            
        
    </div>
               
   
  )
}

export default Footer;