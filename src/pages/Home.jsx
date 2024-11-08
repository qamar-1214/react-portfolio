// src/pages/Home.js
import React from "react";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import VideoSection from "../components/Home/VideoSection";
import Projects2 from "../components/Home/Projects2";

const Home = () => {
  return (
    <div className="flex flex-col mt-2 md:mt-[58px]  px-3 lg:px-8 pt-10 ">
      {/* Hero Section */}
      <Hero />
      <Projects />
      <VideoSection />
      <Projects2 />
    </div>
  );
};

export default Home;
