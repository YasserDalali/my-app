import React from "react";

function NavBar() {
  return (
    <div className="bg-slate-900 text-white px-5 py-2 shadow-2xl fixed top-0 w-full flex items-center z-50">
      <a className="cursor-pointer text-3xl font-bold bg-grad-main p-2 rounded-md">
        StaffTrack
      </a>

      <ul className="flex justify-around w-full">
        <li className="cursor-pointer hover:font-bold transition-all hover:scale-110 font-semibold">
          Home
        </li>
        <li className="cursor-pointer hover:font-bold transition-all hover:scale-110 font-semibold">
          item1
        </li>
        <li className="cursor-pointer hover:font-bold transition-all hover:scale-110 font-semibold">
          item2
        </li>
        <li className="cursor-pointer hover:font-bold transition-all hover:scale-110 font-semibold">
          item3
        </li>
        <li className="cursor-pointer hover:font-bold transition-all hover:scale-110 font-semibold">
          item4
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
