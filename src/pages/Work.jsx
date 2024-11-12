import React from "react";
import Project1 from "../components/Work/Project1";
import Project2 from "../components/Work/Project2";
import Project3 from "../components/Work/Project3";

const Work = () => {
  return (
    <div className="flex flex-col     lg:px-8 md:pt-8 ">
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
  );
};

export default Work;
