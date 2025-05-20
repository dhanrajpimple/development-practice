import React from "react";
import patner1 from "../assests/image 9.svg";
import patner2 from "../assests/image 11.svg";
import patner3 from "../assests/image 12.svg";
import patner4 from "../assests/image 13.svg";
import patner5 from "../assests/image 14.svg";
import patner6 from "../assests/image 15.svg";
import patner7 from "../assests/image 11 (1).svg"
export default function Patners() {
  return (
    <div className="py-8 sm:py-16 bg-white text-center w-full">
      <div className="w-[90%] md:w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-8">
          <div className="hidden sm:block h-2 w-2 rounded-full bg-primary"></div>
          <div className="hidden sm:block h-[2px] w-16 sm:w-28 md:w-40 lg:w-64 bg-primary"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mx-4">
            Our Partners
          </h2>
          <div className="hidden sm:block h-[2px] w-16 sm:w-28 md:w-40 lg:w-64 bg-primary"></div>
          <div className="hidden sm:block h-2 w-2 rounded-full bg-primary"></div>
        </div>

        {/* Responsive Grid of Square Partner Logos */}
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
  {[patner1, patner2, patner3, patner4, patner5, patner6, patner7].map((img, idx) => (
    <div
      key={idx}
      className="bg-white border rounded-md shadow-sm h-24 flex items-center justify-center px-4"
    >
      <img
        src={img}
        alt={`Partner ${idx + 1}`}
        className="max-h-[60%] object-contain"
      />
    </div>
  ))}
</div>


      </div>
    </div>
  );
}
