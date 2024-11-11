import React, { useState, useEffect } from "react";
import img from "../../assets/projects/image-01.jpg";

const Experience = () => {
  // State for handling the zoom effect
  const [isZoomed, setIsZoomed] = useState(false);

  // Toggle zoom on image click
  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  // Add or remove the overflow hidden class on body when image is zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isZoomed]);

  return (
    <section id="experience" className="mt-10 md:mt-16">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-white">
        Work Experience
      </h1>

      {/* Section with two h2 headings */}
      <div id="fly" className="flex justify-between mt-4">
        <h2 className="text-xl font-semibold text-white">FLY</h2>
        <h2 className="text-sm text-white mr-12">2022 - Present</h2>
      </div>

      {/* Subheading below the two headings */}
      <h2 className="text-sm text-pink-200 mt-1">Senior Design Engineer</h2>

      {/* List of responsibilities */}
      <ul className="list-disc list-inside mt-3 space-y-4 text-white">
        <li className="text-[15px]">
          Redesigned the UI/UX for the FLY platform, resulting in a 20% increase
          in user engagement and 30% faster load times.
        </li>
        <li className="text-[15px]">
          Spearheaded the integration of AI tools into design workflows,
          enabling designers to iterate 50% faster.
        </li>
      </ul>

      {/* Image div with zoom functionality */}
      <div
        onClick={handleImageClick}
        className={`mt-6 max-w-60 h-32 relative rounded-lg cursor-pointer border border-gray-700 ms-6 ${
          isZoomed ? "z-50" : ""
        }`}
      >
        {/* Image with conditional zoom styles */}
        <img
          src={img}
          alt="About image"
          className={`transition-transform duration-500 ease-in-out ${
            isZoomed
              ? "w-[70%] h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 z-50"
              : "w-full h-full object-cover rounded-lg "
          }`}
          style={{ transformOrigin: "center center" }}
        />

        {/* Overlay background only visible when zoomed */}
        {isZoomed && (
          <div className="absolute inset-0 bg-transparent bg-opacity-70 z-40" />
        )}
      </div>
      <div className="pt-6">
        {/* Section with two h2 headings */}
        <div id="creative3" className="flex justify-between mt-4">
          <h2 className="text-xl font-semibold text-white">Creativ3</h2>
          <h2 className="text-sm text-white mr-12">2018 - 2022</h2>
        </div>

        {/* Subheading below the two headings */}
        <h2 className="text-sm text-pink-200 mt-1">Lead Designer</h2>

        {/* List of responsibilities */}
        <ul className="list-disc list-inside pt-6 space-y-4 text-white">
          <li className="text-[15px]">
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </li>
          <li className="text-[15px]">
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
