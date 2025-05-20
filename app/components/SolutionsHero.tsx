import React from 'react';

const SolutionsHero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 sm:px-8 py-12 w-full">
      <div className="w-full max-w-full text-center bg-[#440099] flex flex-col gap-4 text-white rounded-3xl px-4 sm:px-8 py-10 shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
          The Bits - Solution
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-thin leading-relaxed">
          THE BITS offer solutions to different types of virtualization technologies,
          including application virtualization, server virtualization, and desktop virtualization software.
          Each type of virtualization solution has its own set of features and capabilities and is
          designed to meet specific needs and requirements.
        </p>
      </div>
    </div>
  );
};

export default SolutionsHero;
