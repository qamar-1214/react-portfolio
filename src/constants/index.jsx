import { FaHome, FaUser, FaBriefcase, FaBlog, FaImages } from "react-icons/fa";
// Import images manually and store them in an array
import cover01 from "../assets/projects/cover-01.jpg";
import cover02 from "../assets/projects/cover-02.jpg";
import cover03 from "../assets/projects/cover-03.jpg";
import cover04 from "../assets/projects/cover-04.jpg";
import img1 from "../assets/projects/image-01.jpg";
import img2 from "../assets/projects/image-02.jpg";
import img3 from "../assets/projects/image-03.jpg";
// Array of imported images
export const projectImages = [cover01, cover02, cover03, cover04];
export const project2Images = [img1, img2, img3];

export const navLinks = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/about", label: "About", icon: <FaUser /> },
  { path: "/work", label: "Work", icon: <FaBriefcase /> },
  { path: "/blog", label: "Blog", icon: <FaBlog /> },
  { path: "/gallery", label: "Gallery", icon: <FaImages /> },
];

export const AboutContent = [];
