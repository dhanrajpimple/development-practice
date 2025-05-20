import React from "react";
import asset from "../assests/assests.png";


export default function Services() {
  return (
    <div className="py-8  bg-white text-center w-full">
      <div className=" w-[90%] md:w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="hidden sm:block h-2 w-2 rounded-full bg-primary"></div>
          <div className="hidden sm:block h-[2px] w-16 sm:w-28 md:w-40 lg:w-64 bg-primary"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mx-4">
            Experts for Your Digital Workspace
          </h2>
          <div className="hidden sm:block h-[2px] w-16 sm:w-28 md:w-40 lg:w-64 bg-primary"></div>
          <div className="hidden sm:block h-2 w-2 rounded-full bg-primary"></div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-3xl mx-auto  text-sm sm:text-base md:text-lg">
          We are a skilled team of developers and consultants focused on digital
          solutions. Our blend of creativity and technical know-how drives
          effective digital transformation for businesses.
        </p>

        {/* Services Buttons */}
        <div className="flex flex-wrap justify-center ">
  <img 
    src={asset} 
    alt="Responsive Asset"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
  />
</div>

      </div>
    </div>
  );
}
