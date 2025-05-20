import React from "react";
import cloud from '../assests/cloud.png';
import digital from '../assests/digital marketing.png';
import DC from '../assests/DC Migrations.png';
import Business from '../assests/business.png';
import data from '../assests/data anylist.png';
import security from '../assests/security.png';
import productivity from '../assests/production.png';
import it from '../assests/itConsting.png';

const services = [
  { title: "Cloud Architecture & Deployment", image: cloud },
  { title: "Digital Marketing", image: digital },
  { title: "DC Migration", image: DC },
  { title: "Business Continuity & Disaster Recovery", image: Business },
  { title: "Data Analytics", image: data },
  { title: "Security/ Compliance/ Governance", image: security },
  { title: "Productivity & Collaboration", image: productivity },
  { title: "IT Consulting Services", image: it },
];

const ServicesGrid = () => {
  return (
    <div className="py-8 sm:py-16 bg-white w-full">
      <div className="w-[90%] md:w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Dividers */}
        <div className="flex items-center justify-center mb-10">
          <div className="hidden sm:block h-2 w-2 rounded-full bg-primary"></div>
          <div className="hidden sm:block h-[2px] w-16 sm:w-24 md:w-32 lg:w-48 bg-primary"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mx-4 text-center">
            THE BITS Professional Services Offerings
          </h2>
          <div className="hidden sm:block h-[2px] w-16 sm:w-24 md:w-32 lg:w-48 bg-primary"></div>
          <div className="hidden sm:block h-2 w-2 rounded-full bg-primary"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
        <div className="relative rounded-xl overflow-hidden w-full h-full cursor-pointer shadow-lg">
        {/* Image Container with Aspect Ratio */}
        <div className="relative pb-[83.33%]"> {/* 6:5 aspect ratio (5/6 = 0.8333) */}
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      
        {/* Overlay with Title */}
        <div className="absolute inset-x-0 bottom-0 h-[25%] bg-black/80 text-white text-lg  font-normal">
        <div className="w-full h-full px-4 flex justify-center items-center text-center">
          {service.title}
        </div>
        </div>
      </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
