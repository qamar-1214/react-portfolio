import React from "react";
import avatar from "../../assets/avatar.jpg";
const AvatarSection = () => {
  return (
    <section className="flex flex-col  space-y-6 items-center  text-center md:text-start  justify-center md:justify-start">
      {/* Avatar */}
      <div className="overflow-hidden">
        <img
          src={avatar}
          alt="Avatar"
          className="w-36 h-36 rounded-full border-[0.4px] border-gray-700"
        />
      </div>

      {/* Name */}
      <h2 className="text-md font-[500] text-white">Asia/Jakarta</h2>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-[1.5px] bg-[rgba(0,0,0,0.3)] border-[0.4px] border-gray-700 text-white rounded-full hover:bg-[rgba(0,0,0,0.5)] transition text-center text-[12px]">
          English
        </button>
        <button className="px-4  py-[1.5px] bg-[rgba(0,0,0,0.3)] border-[0.4px] border-gray-700 text-white rounded-full hover:bg-[rgba(0,0,0,0.5)] transition text-[12px]">
          Bahasa
        </button>
      </div>
    </section>
  );
};

export default AvatarSection;
