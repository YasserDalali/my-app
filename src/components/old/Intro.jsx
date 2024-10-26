import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from '@fortawesome/free-solid-svg-icons'
import React from "react";

function Intro() {
  return (
    <div className="relative lg:p-20 mb-20">
      <p className="text-5xl text-center font-bold my-10">Introduction</p>
      <div className="grid lg:grid-cols-2 lg:padding">



        <div className="flex ">
          <div className="w-4 rounded-full h-full bg-grad-main mx-5"></div>
          <div>
          <FontAwesomeIcon icon={fa.faClock} className="text-3xl text-green-500 mb-2" />
          <p className="text-3xl font-semibold mb-2">Title</p>
            <p className="lg:text-lg mr-20 text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              corrupti eveniet iusto impedit. Voluptatum voluptatibus quo
              voluptatem! Quae, incidunt. Omnis officiis quod iure debitis
              temporibus! Fugiat perferendis velit quos repellendus?

              uptatum voluptatibus quo
              voluptatem! Quae, incidunt. Omnis officiis quod iure debitis
              temporibus! Fugiat perferendis velit quos repellendu
            </p>
          </div>
        </div>


        <div className="flex mt-20 lg:m-0">
          <div className="w-4 rounded-full h-full bg-grad-main mx-5"></div>
          
          <div>
          <FontAwesomeIcon icon={fa.faSquarePollVertical} className="text-3xl text-green-500 mb-2" />
          <p className="text-3xl font-semibold mb-2">Title</p>
            <p className="lg:text-lg text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              corrupti eveniet iusto impedit. Voluptatum voluptatibus quo
              voluptatem! Quae, incidunt. Omnis officiis quod iure debitis
              temporibus! Fugiat perferendis velit quos repellendus?

              uptatum voluptatibus quo
              voluptatem! Quae, incidunt. Omnis officiis quod iure debitis
              temporibus! Fugiat perferendis velit quos repellendu
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Intro;
