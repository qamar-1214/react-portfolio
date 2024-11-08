import React, { useEffect, useState } from "react";
import { projectImages } from "./Utils"; // Import your images here
import { HiOutlineChevronRight } from "react-icons/hi2";
import avatar1 from "../../assets/avatar.jpg";
import avatar2 from "../../assets/avatars/avatar-01.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 1000); // Initial delay for smooth transition

    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = () => {
    if (projectImages.length > 1) {
      setIsTransitioning(false);
      const nextIndex = (activeIndex + 1) % projectImages.length;
      setTimeout(() => {
        setActiveIndex(nextIndex);
        setIsTransitioning(true);
      }, 1000); // Add delay for smooth transition
    }
  };

  const handleControlClick = (index) => {
    if (index !== activeIndex) {
      setIsTransitioning(false);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(true);
      }, 1000); // Delay for smooth transition
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-col items-center justify-center my-16 px-5 md:px-16 w-full opacity-85"
    >
      <div className="w-full lg:max-w-[870px] mx-auto">
        <div
          onClick={handleImageClick}
          className="w-full  relative overflow-hidden rounded-2xl"
        >
          <img
            src={projectImages[activeIndex]}
            alt={`Project ${activeIndex + 1}`}
            className={`w-full h-auto object-cover rounded-2xl cursor-pointer transition-opacity duration-700 border-[0.0001px] border-gray-900 shadow-lg ${
              isTransitioning ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Custom line indicator */}
        {projectImages.length > 1 && (
          <div className="flex  gap-1 px-4 justify-start mt-4 w-full">
            {projectImages.map((_, index) => (
              <div
                key={index}
                onClick={() => handleControlClick(index)}
                className={`cursor-pointer w-full sm:w-24 h-[2px] rounded transition-all ${
                  activeIndex === index ? "bg-white" : "bg-[rgba(40,40,40,0.9)]"
                }`}
              ></div>
            ))}
          </div>
        )}

        {/* content */}
        <div className="flex flex-col w-full gap-20 md:gap-36 p-4 md:m-6 lg:m-9 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h1
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-3xl lg:text-4xl inter-font font-[750] text-white"
            >
              Building an adaptive design system for Archlight
            </h1>
            <div className="flex flex-col justify-start ">
              <div className="relative">
                <img
                  src={avatar1}
                  alt="Left Avatar"
                  className="w-8 h-8 rounded-full border border-gray-700 shadow-lg -mr-2 absolute    z-[100]"
                />
                <img
                  src={avatar2}
                  alt="Right Avatar"
                  className="w-8 h-8 rounded-full border border-gray-700 shadow-lg ml-6"
                />
              </div>
              <p className="text-gray-300 text-[13px] mt-3">
                In this project, I developed a flexible and scalable design
                system using Next.js for front-end development and Figma for
                design collaboration.
              </p>
              <Link
                to={"/work/adaptive-design-system-for-archlight"}
                className="relative flex items-center   mt-3 group "
              >
                <span className="text-green-300 text-sm group-hover:after:absolute group-hover:after:left-0  group-hover:after:bottom-[-0.5px]  group-hover:after:w-[100px] group-hover:transition-all group-hover:duration-300 group-hover:after:h-[1.5px] after:bg-gray-600 ">
                  Read Case Study
                </span>

                <HiOutlineChevronRight className="ml-1 transition-all duration-300 mt-1 text-green-300" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* First Item with Link */}
            <div className="relative flex flex-col items-start w-full group cursor-pointer">
              <Link to="/blog/new-milestone-in-my-career" className="relative">
                <div className="w-[1.5px] bg-gray-800 h-5 absolute -left-8 top-1/2 transform -translate-y-1/2 group-hover:rotate-90 transition-all duration-500 ease-in-out"></div>
                <div className=" group-hover:pl-5 transition-all duration-500 ease-in-out">
                  <h2 className="text-white text-2xl font-semibold mb-2">
                    Arriving to a new <br /> milestone in my career
                  </h2>
                  <p className="text-gray-400 text-base">April 8, 2024</p>
                </div>
              </Link>
            </div>

            {/* Second Item with Link */}
            <div className="relative flex flex-col items-start w-full group cursor-pointer md:pl-16">
              <Link
                to="/blog/the-99-percent-that-remains-in-the-drawer"
                className="relative"
              >
                <div className="w-[1.5px] bg-gray-800 h-5 absolute -left-8 top-1/2 transform -translate-y-1/2 group-hover:rotate-90 transition-all duration-500 ease-in-out"></div>
                <div className=" group-hover:pl-5 transition-all duration-500 ease-in-out">
                  <h2 className="text-white text-2xl font-semibold mb-2">
                    The 99% that <br /> remains in the drawer
                  </h2>
                  <p className="text-gray-400 text-base">March 5, 2024</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
