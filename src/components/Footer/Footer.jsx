import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between w-full lg:px-20 p-4 mb-20 md:mb-0  text-gray-100">
      {/* Left side text */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p>© 2024 /Selene Yu/ Build your portfolio with Once UI</p>
      </div>

      {/* Right side icons */}
      <div className="flex gap-6">
        <a
          href="https://github.com/once-ui-system/nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/once-ui/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:example@gmail.com"
          aria-label="Email"
          className="hover:text-white transition duration-300"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
