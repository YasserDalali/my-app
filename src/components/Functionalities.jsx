import React from "react";
import Func1 from "./functionalities/functionalityContent";
import {func1, func2, func3} from "./functionalities/funcData";


function Functionalities() {
  const [selectedFunc, setSelectedFunc] = React.useState(func1);

  return (
    <div className="relative padding bg-slate-900 text-white">
      <p className="text-5xl text-center font-bold">Functionalities</p>
      <ul className="flex justify-around mx-48  my-10">
        <li
        
          className={`rounded-full border p-2 w-32 text-center cursor-pointer hover:font-bold transition-all hover:scale-110 font-semibold ${
            selectedFunc === func1 ? "grad-main-text bg-grad-main border-green-500  " : ""}`}
          onClick={() => {
            setSelectedFunc(func1);
          }}
        >
          {func1.title}
        </li>
{/* ------------------------------ */}
        <li
          className={`rounded-full border p-2 w-32 text-center cursor-pointer hover:font-bold transition-all hover:scale-110 font-semibold ${
            selectedFunc === func2 ? "grad-main-text  bg-grad-main border-green-500 " : ""}`}
          onClick={() => {
            setSelectedFunc(func2);
          }}
        >
          {func2.title}
        </li>
{/* ------------------------------ */}

        <li
          className={`rounded-full border p-2 w-32 text-center cursor-pointer hover:font-bold transition-all hover:scale-110 font-semibold ${
            selectedFunc === func3 ? "grad-main-text u bg-grad-main border-green-500" : ""}`}
          onClick={() => {
            setSelectedFunc(func3);
          }}
        >
          {func3.title}
        </li>

        
      </ul>
      <div className="">
        <Func1 func={selectedFunc} />
      </div>
    </div>
  );
}

export default Functionalities;
