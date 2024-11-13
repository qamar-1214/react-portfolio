import { FaHome, FaUser, FaBriefcase, FaBlog, FaImages } from "react-icons/fa";
// Import images from assets/projects
import cover01 from "../assets/projects/cover-01.jpg";
import cover02 from "../assets/projects/cover-02.jpg";
import cover03 from "../assets/projects/cover-03.jpg";
import cover04 from "../assets/projects/cover-04.jpg";
import image1 from "../assets/projects/image-01.jpg";
import image2 from "../assets/projects/image-02.jpg";
import image3 from "../assets/projects/image-03.jpg";
//import images from assets/gallery
import img1 from "../assets/gallery/img-01.jpg";
import img2 from "../assets/gallery/img-02.jpg";
import img3 from "../assets/gallery/img-03.jpg";
import img4 from "../assets/gallery/img-04.jpg";
import img5 from "../assets/gallery/img-05.jpg";
import img6 from "../assets/gallery/img-06.jpg";
import img7 from "../assets/gallery/img-07.jpg";
import img8 from "../assets/gallery/img-08.jpg";
import img9 from "../assets/gallery/img-09.jpg";
import img10 from "../assets/gallery/img-10.jpg";
import img11 from "../assets/gallery/img-11.jpg";
import img12 from "../assets/gallery/img-12.jpg";
import img13 from "../assets/gallery/img-13.jpg";
import img14 from "../assets/gallery/img-14.jpg";
// Array of imported images
export const projectImages = [cover01, cover02, cover03, cover04];
export const project2Images = [image1, image2, image3];

export const navLinks = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/about", label: "About", icon: <FaUser /> },
  { path: "/work", label: "Work", icon: <FaBriefcase /> },
  { path: "/blog", label: "Blog", icon: <FaBlog /> },
  { path: "/gallery", label: "Gallery", icon: <FaImages /> },
];

export const GalleryImages = [
  img1,
  img2,
  img3,
  img4,
  img8,
  img7,
  img6,
  img5,
  img9,
  img11,
  img10,
  img12,
  img13,
  img14,
];
