import React from "react";
import video from "../../assets/projects/video-01.mp4";

const VideoSection = () => {
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
            src={video} // Replace with the path to your video
            autoPlay
            loop
            muted
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Content Section */}
        <div className=" w-full p-4 md:p-8 ">
          <h1
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-3xl lg:text-3xl inter-font font-[750] text-white "
          >
            Simple portfolio creator built with Once UI and Next.js
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
