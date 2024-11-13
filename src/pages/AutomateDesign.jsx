import React from "react";

const AutomateDesign = () => {
  return (
    <div className="flex flex-col gap-3  md:mt-12 justify-center w-full h-screen items-center text-center">
      <h1 className="text-3xl font-bold">
        This page is <br /> password protected
      </h1>
      <div className="flex flex-col gap-7 items-center justify-center mt-4 w-full px-4">
        <div className="relative w-full md:w-[350px]">
          {/* Input field */}
          <input
            id="password"
            type="password"
            className="peer w-full   py-3 px-4 bg-[rgba(30,30,30,1)] hover:bg-[rgba(45,45,45,1)] focus:bg-[rgba(45,45,45,1)] border border-gray-700 rounded-xl   text-white placeholder-transparent outline-none   transition-all duration-300"
            placeholder="Enter password"
          />
          {/* Floating label */}
          <label
            htmlFor="password"
            className={`absolute left-4  text-gray-white text-sm transition-all duration-300 pointer-events-none
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400
        peer-placeholder-shown:text-sm
        peer-focus:top-0 peer-focus:-translate-y-0 peer-focus:text-gray-300 peer-focus:text-[9px] ${
          "top-0" && "text-[9px]"
        }`}
          >
            Enter password
          </label>
        </div>
        {/* Submit button */}
        <button className="bg-white px-6 py-3 text-black text-sm rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AutomateDesign;
