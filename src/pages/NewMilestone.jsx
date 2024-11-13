import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";

const NewMilestone = () => {
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
          Arriving to a new milestone in my career
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
              Every career is a journey, filled with challenges, growth, and
              those significant moments that mark a shift in our path. Today,
              I’m excited to share that I’ve arrived at a new milestone in my
              career—one that is both a culmination of past experiences and a
              stepping stone toward future aspirations.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              Reflecting on the Journey So Far
            </h1>
            <p className="text-gray-100 text-[15px]">
              Looking back, it’s clear that each phase of my career has built
              upon the last, guiding me to where I stand today. From my early
              days of learning the basics and struggling through complex
              projects, to gaining confidence through real-world experience,
              each step has shaped my skills and mindset. I’ve learned that
              design and engineering are as much about problem-solving and
              creativity as they are about resilience and continuous learning.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              What This Milestone Represents
            </h1>
            <p className="text-gray-100 text-[15px]">
              Reaching this milestone represents more than just professional
              progress—it’s a moment of personal growth. It’s a sign that the
              dedication and passion I’ve invested are paying off. Whether it’s
              mastering a new skill, taking on leadership responsibilities, or
              completing a major project, this achievement is a reminder that
              perseverance, curiosity, and a love for what I do are key drivers
              of success.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              The Challenges That Shaped Me
            </h1>
            <p className="text-gray-100 text-[15px]">
              Of course, no journey is without its hurdles. There were moments
              of doubt, failed prototypes, and unforeseen obstacles that tested
              my resolve. However, those challenges taught me the importance of
              adaptability, creative thinking, and collaboration. They pushed me
              to improve, to think outside the box, and to view setbacks not as
              failures, but as opportunities to learn and grow.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              Embracing New Opportunities
            </h1>
            <p className="text-gray-100 text-[15px]">
              This milestone is also an opportunity to embrace new challenges
              and expand my horizons. Whether it’s exploring emerging
              technologies, diving deeper into specific fields of interest, or
              taking on a mentorship role, I’m excited about what lies ahead.
              The engineering and design landscape is constantly evolving, and
              staying curious and open to new ideas is what keeps this career
              path so rewarding.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              Gratitude and Acknowledgment
            </h1>
            <p className="text-gray-100 text-[15px]">
              I’d be remiss if I didn’t take a moment to acknowledge the
              mentors, colleagues, and collaborators who have been part of this
              journey. Their insights, support, and shared enthusiasm have been
              invaluable. Reaching this milestone is as much a testament to
              their influence as it is to my individual efforts.
            </p>
          </div>
          <div className="pt-3">
            <h1 className="text-white text-2xl font-bold mb-4">
              Looking Ahead
            </h1>
            <p className="text-gray-100 text-[15px]">
              While I’m proud of how far I’ve come, I know this is just one
              milestone in a much larger journey. The road ahead is filled with
              exciting possibilities, and I’m eager to continue pushing
              boundaries, learning new things, and contributing to meaningful
              projects. If there’s one thing I’ve learned along the way, it’s
              that every new milestone is not an end, but rather a launchpad for
              the next chapter. <br /> <br /> Thank you for being part of this
              journey with me, and here’s to the adventures yet to come!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMilestone;
