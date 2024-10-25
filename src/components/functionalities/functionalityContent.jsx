import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa, faCheck } from "@fortawesome/free-solid-svg-icons";

function Func1({
  func: { src: src, title: title, desc: desc, benefits: bens },
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:my-10 items-center lg:mt-20 lg:h-fit lg:min-h-[200px] xl:min-h-[500px]">
      <div className="lg:w-1/2 lg:text-xl lg:pr-28">
        <p className="text-3xl font-semibold lg:text-left text-center">{title}</p>
        <p className="text-justify mt-5 lg:text-lg">{desc}</p>
        <p className="mt-5 text-slate-300 hidden md:block">
          {bens.map((ben, i) => (
            <p key={i}>
              <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" />
              {ben}
            </p>
          ))}
        </p>
      </div>

      <video
        src={src}
        autoPlay
        playsInline
        loop
        muted
        className="lg:absolute w-full mt-10 lg:mt-0 lg:w-1/2 object-cover right-0 top-[250px] shadow-2xl  lg:shadow-2x shadow-green-600"
      />
    </div>
  );
}

export default Func1;
