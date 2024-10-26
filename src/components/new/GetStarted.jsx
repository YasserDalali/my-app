import React from 'react'
import styles from '../../style';
import { arrowUp } from '../../assets';

/**
 * Returns a "Get Started" button component
 * 
 * This component is a rounded rectangle with a blue gradient background and a white 
 * foreground. It has two lines of text that are centered horizontally and vertically 
 * inside the rectangle. The first line of text is "Get" in a blue gradient color, and the 
 * second line of text is "Started" in the same color. The component also has an upward 
 * pointing arrow icon to the right of the text.
 * 
 * @return {ReactElement} The "Get Started" button component
 */
function GetStarted() {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-secondary transition-all`}>

      <div className={`${styles.flexCenter} flex-col h bg-primary w-[95%] h-[95%] rounded-full`}>
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