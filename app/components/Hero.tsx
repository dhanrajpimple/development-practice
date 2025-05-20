import React, { useState, useEffect } from "react";
import slide1 from "../assests/slide1.png";
import slide2 from "../assests/slide2.png";
import slide3 from "../assests/slide3.png";
import slide4 from "../assests/slide4.png";

const slides = [
  {
    bgImage: slide1,
    heading: "Your Digital Transformation Journey Starts Here",
    subText:
      "Empowering businesses with cutting-edge IT solutions, expert consulting, and seamless technology integration.",
    color: "#440099",
  },
  {
    bgImage: slide2,
    heading: "Driving Digital Excellence.",
    subText:
      "Future-proof your business with scalable, secure, and innovative technology.",
    color: "white",
  },
  {
    bgImage: slide3,
    heading: "Your Vision, Our Technology.",
    subText:
      "Bridging the gap between ideas and innovation with tailored IT solutions.",
    color: "white",
  },
  {
    bgImage: slide4,
    heading: "Seamless Technology, Limitless Growth.",
    subText:
      "Empowering businesses with smart solutions and expert-driven digital transformation.",
    color: "white",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white py-6 sm:py-12 w-full">
      {/* Slider Container */}
      <div className="relative w-[90%] md:w-[95%]  h-[200px] sm:h-[200px] md:h-[300px] lg:h-[350px] rounded-3xl  overflow-hidden shadow-xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${slides[currentIndex].bgImage})` }}
        >
         
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 md:gap-10 text-center px-6 h-full w-full">
          <h2
            className="text-xl sm:text-2xl md:text-5xl font-bold"
            style={{ color: slides[currentIndex].color }}
          >
            {slides[currentIndex].heading}
          </h2>
          <p
            className=" text-sm sm:text-base md:text-lg font-light "
            style={{ color: slides[currentIndex].color }}
          >
            {slides[currentIndex].subText}
          </p>
          <button className=" px-6 py-1 sm:py-3 bg-primary hover:bg-purple-700 text-white font-semibold rounded-full transition">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="mt-6 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              currentIndex === index ? "bg-primary w-6" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
