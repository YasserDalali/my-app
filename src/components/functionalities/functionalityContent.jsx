import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa, faCheck } from '@fortawesome/free-solid-svg-icons'

function Func1({ func: { src: src, title: title, desc: desc, benefits: bens } }) {
  return (
    <div className="flex my-10 items-center mt-20 h-fit lg:min-h-[200px] xl:min-h-[500px]">
      <div className="w-1/2 text-xl pr-28">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="text-justify mt-5">{desc}</p>
        <p className="mt-5 text-slate-300">{bens.map((ben, i) => <p key={i}>
          <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" />
        {ben}</p>)}</p>
      </div>

      <video
        src={src}
        autoPlay
        playsInline 
        loop
        muted
        className="absolute w-1/2 object-cover right-0 top-[250px] "
      />
    </div>
  );
}

export default Func1;
