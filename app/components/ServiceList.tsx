import React, { useState } from "react";
import security from "~/assests/security.png";
import manage from "~/assests/Manage.jpeg";
import professional from "~/assests/professinal.jpeg";
import security1 from "~/assests/security1.jpeg";
import managed1 from "~/assests/manage2.jpeg";
import cloud from "~/assests/cloud1.png";
import mdr from "~/assests/mdr.jpeg";
import edr from "~/assests/edr.jpeg";
import monitor from "~/assests/monitoring.jpeg";
import strategy from "~/assests/strategy.jpeg";
import vdi from "~/assests/vid.jpeg";
import farewalls from "~/assests/firewalls.jpeg";
import backup from "~/assests/backup.jpeg";
import cloudinfra from "~/assests/cloudinfa.jpeg";
import ContactForm from '~/components/ContactForm';
import contactbg1 from "~/assests/servicecontactbg1.jpeg";
import contactbg2 from "~/assests/servicecontactbg2.jpeg";

// Default category data for Managed Security
const SecurityData = [
  { title: "Security Monitoring", image: security1 },
  { title: "Managed Detection & Response", image: managed1 },
  { title: "Cloud", image: cloud },
];

const ServiceList = () => {
  // State for selected service items with default set to SecurityData
  const [selected, setSelected] = useState<{ title: string; image: string }[]>(SecurityData);
  // State for active category selection
  const [activeCategory, setActiveCategory] = useState("Managed Security");

  // Main navigation for service categories
  const select = [
    { id: 1, name: "Managed Security", image: security },
    { id: 2, name: "Manage Infrastructure", image: manage },
    { id: 3, name: "Professional Services", image: professional },
  ];

  // Data for each category
  const Infrastructure = [
    { title: "Infrastructure Monitoring", image: monitor },
    { title: "Infrastructure Management & Strategy", image: strategy },
    { title: "Managed VDI", image: vdi },
    { title: "Managed Firewalls", image: farewalls },
    { title: "Managed and Backup and Disaster Recovery", image: backup },
    { title: "Cloud Infrastructure Management", image: cloudinfra },
  ];

  const Services = [
    { title: "EDR (Endpoint Detection and Response)", image: edr },
    { title: "MDR (Managed Detection and Response)", image: mdr },
  ];

  // Update the selected array and active category based on clicked category
  const handleClick = (title: string) => {
    setActiveCategory(title);
    if (title === "Managed Security") {
      setSelected(SecurityData);
    } else if (title === "Manage Infrastructure") {
      setSelected(Infrastructure);
    } else {
      setSelected(Services);
    }
  };

  return (
    <>
      {/* Service Category Selection */}
      <div className="flex w-full justify-center gap-4 md:gap-8 flex-wrap px-4 sm:px-6">
        {select.map((serviceItem, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden w-56 sm:w-60 h-44 sm:h-48 cursor-pointer shadow-lg mb-4 
              ${activeCategory === serviceItem.name ? "border-2 border-[#440099]" : ""}`}
            onClick={() => handleClick(serviceItem.name)}
          >
            {/* Image Container with fixed aspect ratio */}
            <div className="relative pb-[83.33%]">
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${serviceItem.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              {/* Overlay for non-selected card */}
              {activeCategory !== serviceItem.name && (
                <div className="absolute inset-0 bg-gray-400 opacity-50"></div>
              )}
            </div>
            {/* Overlay with Title */}
            <div
              className={`absolute inset-x-0 bottom-0 h-[25%] flex justify-center items-center text-white text-lg font-normal 
              ${activeCategory === serviceItem.name ? "bg-[#440099]/80" : "bg-black/80"}`}
            >
              {serviceItem.name}
            </div>
          </div>
        ))}
      </div>

      {/* Display Selected Items */}
      <div className="flex flex-col px-4 md:px-20 gap-5 my-5">
        {selected.map((item, idx) => (
          <div
            key={idx}
            className="relative flex items-center h-20 overflow-hidden bg-gradient-to-r from-[#F0F0F0] to-[#FFFFFF] rounded-l-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="min-h-full w-20 sm:w-24 rounded-t-full rounded-bl-full object-cover"
            />
            <p className="text-[#440099] ml-4 text-sm font-bold sm:text-lg">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Contact Form with responsive background image based on category */}
      <ContactForm bgimage={activeCategory === "Managed Security" ? contactbg1 : contactbg2} />
    </>
  );
};

export default ServiceList;
