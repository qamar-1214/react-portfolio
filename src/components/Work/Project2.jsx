import React from "react";
import video from "../../assets/projects/video-01.mp4";

const Project2 = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-col items-center justify-center my-2 px-5 md:px-16 w-full opacity-85"
    >
      <div className="w-full lg:max-w-[870px] mx-auto">
        {/* Video Section */}
        <div className="w-full relative overflow-hidden rounded-2xl">
          <video
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="false"
            src={video} // Replace with the path to your video
            autoPlay
            loop
            muted
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Content Section */}
        <div className=" w-full px-4 py-8">
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="false"
            className="text-2xl inter-font font-[750] text-white "
          >
            Simple portfolio creator built with Once UI and Next.js
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Project2;
