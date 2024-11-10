import MainContent from "../components/About/MainContent";
import Sidebar from "../components/About/Sidebar";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen  mt-2 md:mt-[62px]  px-3 pt-10 ">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default About;
