import React from 'react'
import styles from '../../style';
import { arrowUp } from '../../assets';

function GetStarted() {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer`}>

      <div className={`${styles.flexCenter} flex-col bg-primary w-[95%] h-[95%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>

          <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
            <span className='text-gradient'>Get</span> 
          </p>

            <img className='w-[24px] h-[24px]' src={arrowUp} alt="" srcset="" /> 
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
            <span className='text-gradient'>Started</span>
          </p>

      </div>

    </div>
  )
}

export default GetStarted