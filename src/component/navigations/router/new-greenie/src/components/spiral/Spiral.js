import React from 'react'
import {ReactComponent as SpiralGreen} from '../../assets/svgs/spiraal.svg';
import {ReactComponent as SpiralBrown} from '../../assets/svgs/spiraaal.svg';
// import {ReactComponent as SpiralBrown} from './spiraal.svg'
// import spiraaal from 'asset/spiraaal.svg'
import '../../styles/spiral.css'

function Spiral() {
  return (
    <div className='spiral'>
      <span className='sp-1'>
        <SpiralGreen />
      </span>

      <span className='sp-2'>
        <SpiralBrown />

      </span>
      {/* <span>
      </span> */}
        
    </div>
  )
}

export default Spiral