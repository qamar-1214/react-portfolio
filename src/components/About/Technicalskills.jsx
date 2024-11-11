import React, { useState, useEffect } from "react";
import img1 from "../../assets/projects/image-01.jpg";
import img2 from "../../assets/projects/image-02.jpg";
import img3 from "../../assets/projects/image-03.jpg";

const Technicalskills = () => {
  // Array of images and state to handle zoom for each one
  const images = [img1, img2, img3]; // Array of image sources (replace with unique images if needed)
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

  // Toggle zoom for an image
  const handleImageClick = (index) => {
    setZoomedImageIndex(zoomedImageIndex === index ? null : index);
  };

  // Add or remove the overflow-hidden class on body when an image is zoomed
  useEffect(() => {
    if (zoomedImageIndex !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [zoomedImageIndex]);

  return (
    <section>
      <h1
        id="skills"
        className="text-2xl md:text-4xl font-bold text-white mb-6"
      >
        Technical skills
      </h1>
      <div className="flex flex-col ">
        <div>
          <h2 id="figma" className="text-xl text-white font-bold">
            Figma
          </h2>
          <h3 className="text-md text-gray-400">
            Able to prototype in Figma with Once UI with unnatural speed.
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          {images.slice(0, 2).map((src, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              className={`mt-6 max-w-60 h-32 relative rounded-lg cursor-pointer border border-gray-700 ${
                zoomedImageIndex === index ? "z-50" : ""
              }`}
            >
              {/* Image with conditional zoom styles */}
              <img
                src={src}
                alt={`Technical skill image ${index + 1}`}
                className={`transition-transform duration-500 ease-in-out ${
                  zoomedImageIndex === index
                    ? "w-[70%] h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 z-50"
                    : "w-full h-full object-cover rounded-lg"
                }`}
                style={{ transformOrigin: "center center" }}
              />
              {/* Overlay background only visible when zoomed */}
              {zoomedImageIndex === index && (
                <div className="absolute inset-0 bg-transparent bg-opacity-70 z-40" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-10">
        <div>
          <h2 id="next" className="text-xl text-white font-bold">
            Next.js
          </h2>
          <h3 className="text-md text-gray-400">
            Building next gen apps with Next.js + Once UI + Supabase.
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          {images.slice(2).map((src, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              className={`mt-6 max-w-60 h-32 relative rounded-lg cursor-pointer border border-gray-700 ${
                zoomedImageIndex === index ? "z-50" : ""
              }`}
            >
              {/* Image with conditional zoom styles */}
              <img
                src={src}
                alt={`Technical skill image ${index + 1}`}
                className={`transition-transform duration-500 ease-in-out ${
                  zoomedImageIndex === index
                    ? "w-[70%] h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 z-50"
                    : "w-full h-full object-cover rounded-lg"
                }`}
                style={{ transformOrigin: "center center" }}
              />
              {/* Overlay background only visible when zoomed */}
              {zoomedImageIndex === index && (
                <div className="absolute inset-0 bg-transparent bg-opacity-70 z-40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technicalskills;
