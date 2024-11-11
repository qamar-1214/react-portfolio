import React from "react";

const Studies = () => {
  return (
    <section id="studies" className="py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
        Studies
      </h1>
      <div className="flex flex-col space-y-6">
        <div id="university">
          <h2 className="text-xl text-white font-bold">
            University of Jakarta
          </h2>
          <h3 className="text-md text-gray-400">
            Studied software engineering.
          </h3>
        </div>
        <div id="future">
          <h2 className="text-xl text-white font-bold">Build the Future</h2>
          <h3 className="text-md text-gray-400">
            Studied online marketing and personal branding.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Studies;
