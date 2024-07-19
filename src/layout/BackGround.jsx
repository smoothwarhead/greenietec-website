import { useContext } from 'react';
import BgSphere from '../component/sphere/BgSphere';
import Spiral from '../component/spiral/Spiral';
import './layout.css';
import {ViewContext} from '../context/ViewContext';


const BackGround = () => {

  const { xl } = useContext(ViewContext);


  return (
    <div className="back-g">
        <div className="sphere-bg">
            <BgSphere />
        </div>

        {!xl && <Spiral />}
            
    </div>
  )
}

export default BackGround