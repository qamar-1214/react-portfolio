// src/components/MainContent.js
import React from "react";
import AvatarSection from "./AvatarSection";

const MainContent = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-24 w-full  ">
      <div>
        <AvatarSection />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem
        atque molestias quis harum reiciendis iusto neque omnis officiis ut odit
        alias rerum tempore sunt, ab voluptatibus fuga placeat vel.
      </div>
    </div>
  );
};

export default MainContent;
