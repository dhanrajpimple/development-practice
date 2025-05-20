import React from "react";
import trasform from "../assests/transformation.jpeg";
import left from "../assests/arraow1.png";
import right from "../assests/arraow3.png";

const steps = [
  {
    title: "Advisory",
    subtitle: "Plan your Digital Transformation",
    description:
      "Work with our experts to form a clear picture of your current and future-state IT capabilities. This process enables you to build consensus between business and IT on your journey to value.",
    image: trasform,
    align: "left",
  },
  {
    title: "Solution Realization",
    subtitle: "Build your Digital Solutions",
    description:
      "We help you enable the features and functions of your software to maximize its value. Get Solutions up and running smoothly. Optimized for your environment, and adopted by your users.",
    image: trasform,
    align: "right",
  },
  {
    title: "Optimization",
    subtitle: "Run and Optimize your Digital Investment",
    description:
      "Our managed services keep your staff focused on important business initiatives. The BITS experts handle technical product issues and help you to realize the full ROI of your technology solutions.",
    image: trasform,
    align: "left",
  },
];

export default function TransformationJourney() {
  return (
    <div className="pb-8  bg-white">
      <div className="w-[90%] md:w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-black text-center mb-12">
          Your Transformation Journey
        </h1>

        {/* Desktop View (md and above) */}
        <div className="hidden md:block">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-row items-center gap-12 mb-16
                ${
                  step.align === "right"
                    ? "flex-row-reverse bg-gradient-to-l from-[#F0F0F0] to-[#FFFFFF] rounded-tr-full rounded-br-full"
                    : "bg-gradient-to-r from-[#F0F0F0] to-[#FFFFFF] rounded-tl-full rounded-bl-full"
                }`}
            >
              <div className={`w-48 h-48 flex-shrink-0 overflow-hidden shadow-lg 
                ${step.align === "left" ? "rounded-bl-full" : "rounded-br-full"} rounded-t-full`}>
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </div>

              <div className={`flex items-center ${step.align === "right" ? "flex-row-reverse" : ""}`}>
                <div className={`w-full ${step.align === "left" ? "text-left" : "text-right"}`}>
                  <h2 className="text-3xl font-bold text-purple-700">{step.title}</h2>
                  <h3 className="text-xl text-gray-600 font-medium mb-3">{step.subtitle}</h3>
                  <p className={`text-gray-600 text-base ${step.align === "left" ? "text-left" : "text-right"}`}>
                    {step.description}
                  </p>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <img src={step.align === "left" ? left : right} className="w-24 mt-24" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View (sm and md) */}
        <div className="md:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                {/* Image */}
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-purple-700 mb-2">{step.title}</h2>
                  <h3 className="text-lg text-gray-600 font-medium mb-4">{step.subtitle}</h3>
                  <p className="text-gray-600 text-base">{step.description}</p>
                </div>
              </div>

              {/* Vertical Connector */}
          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}