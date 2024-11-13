import React, { useState, useEffect } from "react";
import img from "../assets/projects/image-01.jpg";

import { HiOutlineChevronLeft } from "react-icons/hi2";
import avatar from "../assets/avatar.jpg";
import { Link } from "react-router-dom";

const DrwerRemains = () => {
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
    <div className="flex flex-col  mb-10 space-y-4 w-full  px-6 lg:px-8 py-6 md:pt-28">
      <div className="w-full max-w-xl mx-auto">
        <Link
          to="/blog"
          className="flex items-center justify-center max-w-20 gap-1.5 border-[0.4px] border-gray-700 bg-[rgba(0,0,0,0.2)] text-[13px] hover:bg-[rgba(16,16,16,0.9)] active:bg-[rgba(16,16,16,0.9)] focus:bg-[rgba(16,16,16,0.9)] font-medium text-white px-2 py-1 rounded-[10px] transition-all duration-300"
        >
          <HiOutlineChevronLeft className="text-[16px]" />
          <span>Posts</span>
        </Link>
        <h1 className="text-3xl md:text-[40px] leading-[40px] md:leading-[48px] font-[800] text-white mt-4">
          The 99% that remains in the drawer
        </h1>
      </div>

      <div className="w-full max-w-xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={avatar}
              alt="Right Avatar"
              className="w-6 h-6 rounded-full border border-gray-700 shadow-lg "
            />
          </div>
          <h2 className="text-sm text-gray-300">April 8, 2024</h2>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="pt-6">
            <p className="text-gray-100 text-[15px]">
              As design engineers, we're often defined by the 1% of our work
              that makes it into the final product. That shiny, polished piece
              of engineering is a result of countless iterations, tweaks, and
              redesigns. But what happens to the other 99%—those ideas,
              concepts, and prototypes that never see the light of day? They
              remain tucked away in the drawer, both literally and figuratively.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              The Beauty of Unused Ideas
            </h1>
            <p className="text-gray-100 text-[15px]">
              It’s easy to think of discarded designs as failures, but in truth,
              they’re stepping stones. Each one represents a path explored,
              tested, and ultimately left behind. Those early drafts may never
              become reality, but they play a crucial role in shaping the
              solution that does. They teach us what works and, more
              importantly, what doesn’t.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              The Process of Elimination
            </h1>
            <p className="text-gray-100 text-[15px]">
              In every project, the first few ideas often come quickly. They’re
              intuitive, straightforward, and sometimes too simple. As we dive
              deeper, we explore more creative solutions, test the limits of
              materials and technology, and challenge the initial assumptions.
              This process of elimination is not about rejecting ideas but about
              refining them. The 99% left in the drawer is evidence of rigorous
              thinking and thorough exploration.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              Why the Drawer Matters
            </h1>
            <p className="text-gray-100 text-[15px]">
              For every concept that didn’t make it, there’s a lesson learned. A
              sketch that looked promising might fail in prototyping. A concept
              that seemed impractical might be revisited years later, finding
              new relevance with advancements in technology or a change in
              project scope. These shelved ideas serve as a knowledge base—a
              library of possibilities for future projects.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              Innovation Through Failure
            </h1>
            <p className="text-gray-100 text-[15px]">
              Many breakthrough innovations are born from revisiting old,
              seemingly failed concepts. What didn’t work in one context might
              be the key to solving a problem in another. As design engineers,
              we should never be afraid to open the drawer and revisit those
              shelved ideas. They are a testament to the iterative nature of
              design, where nothing is truly wasted.
            </p>
            {/* Image div with zoom functionality */}
            <div
              onClick={handleImageClick}
              className={`mt-12 max-w-[600px] mb-4 h-auto relative rounded-lg cursor-pointer  ${
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
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              Final Thoughts
            </h1>
            <p className="text-gray-100 text-[15px]">
              The final product is just the tip of the iceberg—the visible 1%.
              The other 99% may never see the spotlight, but they are just as
              important. They represent the trial and error, the persistence,
              and the creative drive that push us to find the best solution. So
              next time you’re stuck or looking for inspiration, don’t be afraid
              to dig into the drawer. The answer might be hiding there, waiting
              for the right moment to shine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrwerRemains;
