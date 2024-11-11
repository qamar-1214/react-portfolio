// import MainContent from "../components/About/MainContent";
// import Sidebar from "../components/About/Sidebar";

// const About = () => {
//   return (
//     <div className="flex flex-col md:flex-row min-h-screen  gap-52  md:mt-[62px]  px-3 pt-10 ">
//       <Sidebar />
//       <MainContent />
//     </div>
//   );
// };

// export default About;
import MainContent from "../components/About/MainContent";
import Sidebar from "../components/About/Sidebar";

const About = () => {
  return (
    <div className="flex min-h-screen md:mt-[67px]  px-3  ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-grow lg:pl-40 md:ml-10 pt-10 lg:pr-20">
        <MainContent />
      </main>
    </div>
  );
};

export default About;
