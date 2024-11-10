import Background1 from "../Background/Background1";

const NewsLetter = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-once="false"
      className="relative z-50 mx-2 sm:mx-6 lg:mx-16  md:mb-12 p-8 md:py-16 my-8 bg-black border border-gray-700 flex items-center justify-center rounded-xl overflow-hidden"
    >
      <Background1 /> {/* Background is now an absolutely positioned element */}
      <div className="relative z-10 text-center text-white w-full max-w-xl mx-auto space-y-6">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="false"
          className="text-3xl font-bold text-white"
        >
          Subscribe to Selene's Newsletter
        </h2>

        {/* Paragraph */}
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="false"
          className="text-gray-100 text-[15px] "
        >
          I occasionally write about design, technology, and share
          <br className="hidden sm:block" /> thoughts on the intersection of
          creativity and engineering.
        </p>

        {/* Email input and Sign Up button */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="false"
          className="flex items-center justify-center gap-3 mt-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2 px-4 max-w-60 bg-[rgba(30,30,30,1)] border border-gray-700 rounded-xl text-gray-300 placeholder-white hover:bg-[rgba(45,45,45,1)] focus:bg-[rgba(45,45,45,1)] focus:outline-none transition-all duration-300 outline-none"
          />
          <button className="bg-white min-h-8 min-w-16 sm:p-2  text-black text-sm  rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
