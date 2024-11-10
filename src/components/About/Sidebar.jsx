// src/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  // Define main links with optional sub-links
  const links = [
    { title: "Introduction", subLinks: [] },
    { title: "Work Experience", subLinks: ["FLY", "Creativ3"] },
    {
      title: "Studies",
      subLinks: ["University of Jakarta", "Build the Future"],
    },
    { title: "Technical skills", subLinks: ["Figma", "Next.js"] },
  ];

  return (
    <aside className="w-full hidden lg:block max-w-56 text-white ">
      <ul className="space-y-6">
        {links.map((link, index) => (
          <li key={index}>
            {/* Main Link */}
            <a
              className="flex items-center space-x-3 hover:pl-1.5 transition-all duration-500 ease-in-out "
              href="#"
            >
              <div className="w-4 h-[0.5px] bg-gray-600 "></div>
              <span className="text-white font-[500] text-[15px]">
                {link.title}
              </span>
            </a>

            {/* Sub-links (only if present) */}
            {link.subLinks.length > 0 && (
              <ul className="ml-8 mt-1 space-y-2">
                {link.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:pl-1.5 transition-all duration-500 ease-in-out"
                    >
                      <div className="w-2 h-[0.5px] bg-gray-600 "></div>
                      <span className="text-white font-[500] text-[15px]">
                        {subLink}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
