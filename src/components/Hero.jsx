import React from "react";

function Hero() {
  return (
    <div className=" text-white w-full h-screen flex bg-center bg-no-repeat bg-cover mt-10 relative">
      {/* Video background */}
      <video
        src="https://videos.pexels.com/video-files/7988271/7988271-uhd_2560_1440_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-50">
      </video>


      {/* Main content */}
      <div className="flex justify-between items-center relative z-10">
        <div className="lg:mx-52 2xl:mx-72 flex flex-col gap-6">
          <h1 className="text-white text-center text-5xl xl:text-9xl">
            MANAGE <span className="grad-main-text">HR</span><br></br> like nothing.
          </h1>
          <p className="text-md p-4 xl:mx-24 lg:text-xl text-slate-200 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            maiores commodi ab at optio dicta odit deleniti quo doloremque
            expedita unde, aperiam accusamus voluptatum obcaecati, iure
            voluptate accusantium itaque.
          </p>

          <div className="flex lg:flex-row flex-col gap-1 justify-center align-middle">
            <button className="button lg:basis-1/2">Get Started</button>
            <button className="button lg:basis-1/2">$ Pricing</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
