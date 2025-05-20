import React from "react";
import storage from "~/assests/storage.png";
import server from "~/assests/servers.png";
import network from "~/assests/network.png";
import security from "~/assests/securty.png";
import cloud from "~/assests/cloud1.png";

interface Solution {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  List: string[];
}

const solutionData: Solution[] = [
  {
    image: storage,
    title: "Storage",
    subtitle: "The Best Choice for Data Storage Management",
    description:
      "Are you struggling to scale storage and not sure which data storage option is right for your business? Partner with THE BITS and discover the best data storage method for your unique business needs.",
    List: [
      "Private Data Storage",
      "Direct-Attached Storage (DAS)",
      "Network-Attached Storage (NAS)",
      "Storage Area Network (SAN)",
      "Cloud Storage (Public Version)",
      "Colocation Services",
    ],
  },
  {
    image: server,
    title: "Servers",
    subtitle: "The Best Choice for Server Installation",
    description:
      "THE BITS provides servers for all purposes, from entry level workgroup servers to multiple server installations with failover.",
    List: [
      "Tailored to Business Needs",
      "Redundant Data Protection",
      "Reliable Backup Solutions",
      "Virtualization for Efficiency",
      "No Compromise on Quality",
    ],
  },
  {
    image: network,
    title: "Networking",
    subtitle: "The Best Choice for Networking Solution",
    description:
      "Modernize Your Network with Industry-Leading networking products & THE BITS IT Expertise",
    List: [
      "Disaster Recovery",
      "Business Continuity",
      "SDWAN & Bandwidth Optimization",
      "Application Optimization",
      "Voice & Collaboration",
    ],
  },
  {
    image: security,
    title: "Security",
    subtitle: "The Best Choice for Security Solution",
    description:
      "Modernize Your Network with Industry-Leading networking products & THE BITS IT Expertise",
    List: [
      "Next Generation Firewalls",
      "EDR/MDR",
      "MFA/IAM",
      "PAM",
      "SASE",
      "Cloud Security",
    ],
  },
  {
    image: cloud,
    title: "Cloud",
    subtitle: "The Best Choice for Cloud Solution",
    description:
      "Modernize Your Network with Industry-Leading networking products & THE BITS IT Expertise",
    List: [
      "Cloud Migration Strategy",
      "M365",
      "Microsoft Azure",
      "Application Modernization",
      "Data Analytics",
      "Cloud Operation Management",
    ],
  },
];

const SolutionsList: React.FC = () => {
  return (
    <div className="mx-auto w-full px-4 sm:px-16">
      {solutionData.map((solution, i) => {
        // Split the bullet list into two columns
        const half = Math.ceil(solution.List.length / 2);
        const leftList = solution.List.slice(0, half);
        const rightList = solution.List.slice(half);

        return (
          <div key={i} className="pt-8 mb-8 flex flex-col gap-4">
            {/* Title, Subtitle, and Image in a Responsive Flex Container */}
            <div className="flex flex-col md:flex-row gap-4 items-start bg-[#F0F0F0] rounded-3xl p-4 md:p-0 md:h-40">
              {/* Responsive Image */}
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full md:w-44 h-full rounded-md object-cover"
              />

              {/* Text Section */}
              <div className="w-full md:w-2/3 py-2">
                <h2 className="mb-1 text-xl sm:text-2xl md:text-2xl font-bold text-[#440099]">
                  {solution.title}
                </h2>

                {/* Horizontal line & Dot */}
                <div className="flex flex-row items-center my-1 space-x-1">
                  <div className="flex-1 h-[1px] bg-[#440099]" />
                  <div className="h-[5px] w-[5px] rounded-full bg-[#440099]" />
                </div>

                <h3 className="mb-4 text-base sm:text-lg md:text-lg font-semibold text-gray-800">
                  {solution.subtitle}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm sm:text-base text-gray-700">
                  {solution.description}
                </p>
              </div>
            </div>

            {/* 2-Column Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 pl-6 mt-3">
              <ul className="list-disc list-inside text-[#440099] text-md">
                {leftList.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="list-disc list-inside text-[#440099] text-md">
                {rightList.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SolutionsList;
