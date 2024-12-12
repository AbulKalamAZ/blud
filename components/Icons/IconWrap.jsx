import React from "react";

const IconWrap = ({ children, link = "#" }) => {
  return (
    // <div className="relative">
    //   <span className="cursor-pointer relative z-10 block px-5 py-3 overflow-hidden font-ExtraBoldCond leading-tight text-black transition-colors duration-300 ease-out border-2 border-black rounded-lg group-hover:text-white">
    //     <span className="absolute cursor-pointer  inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
    //     <span className="absolute cursor-pointer  left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
    //     <span className="relative cursor-pointer ">{children}</span>
    //   </span>
    //   {/* <div className="bg-white h-[44px] w-[44px] flex justify-center items-center border-2 border-black rounded-lg relative z-10">
    //     {children}
    //   </div> */}
    //   <span
    //     className="cursor-pointer top-[3px] absolute bottom-0  right-0 w-full h-11 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0"
    //     data-rounded="rounded-lg"
    //   ></span>
    // </div>
    <a
      href={link}
      className="relative inline-block text-lg md:text-xl group z-40 cursor-pointer"
    >
      <span className="cursor-pointer relative z-10 block px-5 py-3 overflow-hidden font-ExtraBoldCond leading-tight text-black transition-colors duration-300 ease-out border-2 border-black rounded-lg group-hover:text-white">
        <span className="absolute cursor-pointer  inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
        <span className="absolute cursor-pointer  left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
        <span className="relative cursor-pointer ">{children}</span>
      </span>
      <span
        className="cursor-pointer  absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </a>
  );
};

export default IconWrap;
