// src/pages/Home.js
import React from "react";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div className="flex flex-col mt-2 md:mt-16  px-4 lg:px-8 pt-10 ">
      {/* Hero Section */}
      <Hero />

      {/* Add more sections below, like About, Projects, etc. */}
      <div className="mt-12">
        Content for the rest of the home page goes here.
      </div>
    </div>
  );
};

export default Home;
