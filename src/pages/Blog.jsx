import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../assets/gallery/img-02.jpg";
import NewsLetter from "../components/Home/NewsLetter";
import Aos from "aos";

const Blog = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <div className="flex flex-col   mt-2 md:mt-[58px]  px-3 pt-4 md:pt-10  sm:items-center  sm:justify-center my-8 md:my-16  md:px-16 w-full ">
        <div className="w-full lg:max-w-[700px] sm:mx-auto">
          <h1 className="text-3xl md:text-[40px] font-bold text-white">
            Writing about design and tech...
          </h1>
          <div className="flex flex-col space-y-6 md:space-y-10 p-3 sm:p-6">
            <Link
              to={"/blog/new-milestone-in-my-career"}
              className="flex flex-col sm:flex-row sm:items-center hover:pl-1.5 duration-500 ease-in-out transition-all gap-7"
            >
              <div className="mt-6 w-[280px] h-40 relative rounded-lg cursor-pointer border-[0.0001px] border-gray-700">
                <img
                  className="transition-transform duration-500 ease-in-out w-full h-full object-cover rounded-lg "
                  src={img}
                  alt="gallery image"
                />
              </div>
              <div className="flex flex-col ">
                <h1 className="text-xl font-semibold mb-1">
                  Arriving to a new <br /> milestone in my career
                </h1>
                <h2 className="text-sm text-gray-400 mb-3">April 8,2024</h2>
                <button className="px-4 max-w-20 py-[1.5px] bg-[rgba(0,0,0,0.3)] border-[0.4px] border-gray-700 text-white rounded-full hover:bg-[rgba(0,0,0,0.5)] transition text-[12px]">
                  Journal
                </button>
              </div>
            </Link>
            <Link
              to={"/blog/the-99-percent-that-remains-in-the-drawer"}
              className=" hover:pl-1.5 duration-500 ease-in-out transition-all"
            >
              <div className="flex flex-col ">
                <h1 className="text-xl font-semibold mb-1">
                  The 99% that remains in the drawer
                </h1>
                <h2 className="text-sm text-gray-400 mb-3">March 5,2024</h2>
                <button className="px-4 max-w-20 py-[1.5px] bg-[rgba(0,0,0,0.3)] border-[0.4px] border-gray-700 text-white rounded-full hover:bg-[rgba(0,0,0,0.5)] transition text-[12px]">
                  Journal
                </button>
              </div>
            </Link>
            <Link
              to={"/blog/the-rise-of-design-engineering"}
              className=" hover:pl-1.5 duration-500 ease-in-out transition-all"
            >
              <div className="flex flex-col ">
                <h1 className="text-xl font-semibold mb-1">
                  The rise of design engineering
                </h1>
                <h2 className="text-sm text-gray-400 mb-3">March 5,2024</h2>
                <button className="px-4 max-w-24 py-[1.5px] bg-[rgba(0,0,0,0.3)] border-[0.4px] border-gray-700 text-white rounded-full hover:bg-[rgba(0,0,0,0.5)] transition text-[12px]">
                  Technology
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-12 lg:px-40">
        <NewsLetter />
      </div>
    </>
  );
};

export default Blog;
