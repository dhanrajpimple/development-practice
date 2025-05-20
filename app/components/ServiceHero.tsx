import React from 'react';
import bg from '~/assests/servicebg.png';

const ServiceHero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 sm:px-6 py-12 w-full">
      <div
        className="relative w-full max-w-full text-center flex flex-col gap-4 rounded-3xl text-white px-6 sm:px-8 py-8 sm:py-10 shadow-lg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#440099] opacity-65 rounded-3xl"></div>

        {/* Content placed above the overlay */}
        <div className="relative z-10 flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            The Bits - Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Empowering Businesses with Secure & Scalable IT Solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
