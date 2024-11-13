import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import image from "../assets/projects/image-02.jpg";
import avatar1 from "../assets/avatar.jpg";
import avatar2 from "../assets/avatars/avatar-01.png";

const AdaptiveDesignSystem = () => {
  return (
    <div className="flex flex-col  mb-10 space-y-6 w-full  px-6 lg:px-8 py-6 md:pt-28">
      <div className="w-full max-w-xl mx-auto">
        <Link
          to="/work"
          className="flex items-center justify-center max-w-24 gap-1.5 border-[0.4px] border-gray-700 bg-[rgba(0,0,0,0.2)] text-[13px] hover:bg-[rgba(16,16,16,0.9)] active:bg-[rgba(16,16,16,0.9)] focus:bg-[rgba(16,16,16,0.9)] font-medium text-white px-2 py-1 rounded-[10px] transition-all duration-300"
        >
          <HiOutlineChevronLeft className="text-[16px]" />
          <span>Projects</span>
        </Link>
        <h1 className="text-3xl md:text-[40px] leading-[40px] md:leading-[48px] font-[800] text-white py-4">
          Building an adaptive design system for Archlight
        </h1>
      </div>
      <div className="max-w-[940px] mx-auto h-auto">
        <img className="rounded-lg" src={image} alt="image" />
      </div>
      <div className="w-full max-w-xl mx-auto">
        <div className="flex items-center gap-3 py-4">
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
          <h2 className="text-sm text-gray-300">April 8, 2024</h2>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="pt-6">
            <h1 className="text-white text-2xl font-bold mb-4">Overview</h1>
            <p className="text-gray-100 text-[15px]">
              In this project, I developed a flexible and scalable design system
              using Next.js for front-end development and Figma for design
              collaboration. The goal was to create a reusable component library
              that not only adheres to consistent design principles but is also
              easily extendable for future needs. The design system was aimed at
              improving the overall developer experience while maintaining
              visual consistency across multiple projects.
            </p>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold mb-2">Key Features</h1>
            <ul className="list-disc list-inside  space-y-2 text-white">
              <li className="text-[15px]">
                <span className="font-bold">Component Library: </span>
                Built a set of modular, reusable UI components using React and
                styled-components in Next.js, focusing on accessibility and
                responsiveness.
              </li>
              <li className="text-[15px]">
                <span className="font-bold"> Theming and Customization: </span>
                Integrated a theming system that allows easy switching and
                customization of color palettes, typography, and layout styles
                using CSS variables and Figma tokens.
              </li>
              <li className="text-[15px]">
                <span className="font-bold"> Figma Integration: </span>
                Collaborated closely with designers by setting up a shared
                design library in Figma. This library was synchronized with the
                codebase, ensuring design handoffs were seamless and that design
                tokens remained consistent across both platforms.
              </li>
              <li className="text-[15px]">
                <span className="font-bold">
                  Documentation and Usage Guidelines:
                </span>
                Developed comprehensive documentation with Storybook to showcase
                components, usage patterns, and best practices, ensuring the
                design system is easy to adopt by other teams.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold mb-2">
              Technologies Used
            </h1>
            <ul className="list-disc list-inside  space-y-2 text-white">
              <li className="text-[15px]">
                <span className="font-bold"> Next.js: </span>
                For fast, server-rendered React applications.
              </li>
              <li className="text-[15px]">
                <span className="font-bold"> Figma: </span>
                For creating and managing design assets and prototypes.
              </li>
              <li className="text-[15px]">
                <span className="font-bold"> Styled-Components: </span>
                For styling React components with a modular, themable approach.
              </li>
              <li className="text-[15px]">
                <span className="font-bold">Storybook:</span>
                For building an interactive, documented component library.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold mb-4">
              Challenges and Learnings
            </h1>
            <p className="text-gray-100 text-[15px]">
              One key challenge was balancing the need for flexibility with the
              desire to maintain design consistency. The solution involved
              creating well-defined design tokens and establishing clear
              guidelines for when and how components could be customized.
              Additionally, setting up effective collaboration workflows between
              designers and developers using Figma and Git was a learning
              experience that greatly improved the process.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">Outcome</h1>
            <p className="text-gray-100 text-[15px]">
              The design system is now actively used across multiple projects,
              leading to faster development cycles, fewer design
              inconsistencies, and improved collaboration between design and
              development teams. It has become a foundation for scaling our
              products efficiently while ensuring a cohesive user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdaptiveDesignSystem;
