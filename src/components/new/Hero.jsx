import React from "react";
import styles from "../../style";
import { discount, robot } from "../../assets";
import GetStarted from "./GetStarted";
// Hero Component
function Hero() {
  return (
    /* // Main container */
    <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* // Left section */}
      <div
        className={`flex-1 ${styles.flexStart}
        flex-col xl:px-0 sm:px-16 px-6`}>
        {/* //! Discount banner */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} className="w-[32px] h-[32px]" alt="" srcset="" />
          <p className="text-slate-400 ml-2 uppercase font-poppins">
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month </span>account
          </p>
        </div>

        {/* //! Heading */}
        <div className="flex flex-row justify-between items-center w-full
        relative
        ">



          <h1 className="capitalize flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                   The next
            <br className="sm:block hidden" /> <span className="text-gradient">Generation</span>{" "}
            <br className="sm:block hidden" />Payment method
          </h1>


          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>



        {/* //! Description */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nisi adipisicing elit. Officia, nisi
          suscipit. Quam, perspiciatis.
        </p>
      </div>

      {/* // Right section */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} className="w-[100%]  h-[100%] relative z-[5]" alt="" />

      <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient"></div>

      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] rounded-full right-20  bottom-20 blue__gradient"></div>

      </div>


      
    
    
    
    </div>
  );
}

export default Hero;
