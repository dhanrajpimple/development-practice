import React from "react";
import contactbg from '../assests/contactus.png';


interface ContactFormProps {
  bgimage?: string;
}  


const ContactForm: React.FC<ContactFormProps> = ({ bgimage = contactbg }) => {
  return (
    <div className="relative bg-black text-white py-16 mb-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgimage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative w-[90%] md:w-[95%] mx-auto px-6 sm:px-8 md:px-10 bg-black/60 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center leading-tight bg-gradient-to-r from-white via-[#7648ad] to-[#5c13b0] bg-clip-text text-transparent">
  Get in touch
</h2>

          <p className="mt-4 text-lg text-gray-300 text-center">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 min-w-[320px] p-6 md:p-8 rounded-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-md bg-transparent text-white border border-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-md bg-transparent text-white border border-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-transparent text-white border border-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-md bg-transparent text-white border border-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-transparent text-white border border-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button className="w-full bg-gradient-to-r bg-primary text-white py-3 rounded-md font-semibold hover:from-purple-700 hover:to-purple-900 transition-all flex items-center justify-center space-x-2">
              <span>Send it to BITS</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
