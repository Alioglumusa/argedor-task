import React from "react";
import imgProfile from "../assets/image-pp.jpg";
import imgFullscreen from "../assets/fullscreen.png";

const Navbar = () => {
  return (
    <>
    
      <div className="right-0 py-5 w-full">
        <div className="justify-end items-center flex relative mr-10">
          <div className="mr-20 cursor-pointer">
            <img src={imgFullscreen} alt="" width="20px"/>
          </div>
          <div className="mr-4">
            <p className="font-semibold text-sm text-black cursor-pointer">Musa</p>
            <p className="text-gray-500 cursor-pointer">User</p>
          </div>
          <div>
            <img
              src={imgProfile}
              className="object-cover btn- h-12 w-9 rounded-full mr-2 bg-gray-300 cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
