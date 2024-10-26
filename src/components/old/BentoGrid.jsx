import React from "react";

function BentoGrid() {
  return (
    <div className=" md:block hidden">
      <p className="text-5xl text-center font-bold">Title</p>

      <div className="h-screen w-full flex items-center justify-center">
        <div className="grid gap-8 p-20 w-full h-full grid-cols-4 grid-rows-3  xl:m-64 lg:m-32 md:16 ">
          <div className="p-4 hover:scale-105 transition-all cursor-pointer hover:shadow-xl shadow-s relative col-span-1 row-span-2 rounded-xl bg-green-600 w-full">
            <h1 className="text-2xl absolute bottom-9 text-white">Yasser</h1>
          </div>
          <div className="p-4 hover:scale-105 transition-all cursor-pointer hover:shadow-xl shadow-s relative col-span-2 row-span-2 rounded-xl bg-lime-500 w-full">
            <h1 className="text-2xl absolute bottom-9 text-white">Yasser</h1>
          </div>
          <div className="p-4 hover:scale-105 transition-all cursor-pointer hover:shadow-xl shadow-s relative col-span-1 row-span-4 rounded-xl bg-emerald-700 w-full">
            <h1 className="text-2xl absolute bottom-9 text-white">Yasser</h1>
          </div>

          <div className="p-4 hover:scale-105 transition-all cursor-pointer hover:shadow-xl shadow-s relative col-span-2 row-span-2 rounded-xl bg-emerald-500 w-full">
            <h1 className="text-2xl absolute bottom-9 text-white">Yasser</h1>
          </div>
          <div className="p-4 hover:scale-105 transition-all cursor-pointer hover:shadow-xl shadow-s relative col-span-1 row-span-2 rounded-xl bg-teal-700 w-full">
            <h1 className="text-2xl absolute bottom-9 text-white">Yasser</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BentoGrid;
