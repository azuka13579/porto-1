import React from "react";
import "../css/styles.css";
import { Link } from "react-router-dom";
import Aurora from "../component/Aurora";

export default function Navbar() {
  return (
    // <Aurora
    //   colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
    //   blend={0.5}
    //   amplitude={1.0}
    //   speed={0.5}
    //   className="h-96"
    // >
    //   <div className="w-full max-w-[1200px] flex justify-between items-center px-10">
    //     <div className="">
    //       <h1 className="text-white font-bold text-5xl">LOGO</h1>
    //     </div>
    //     <div className=" flex gap-10 text-white font-Poppins ">
    //       <Link to="/">Home</Link>
    //       <Link to="/">About</Link>
    //       <Link to="/">Skills</Link>
    //       <Link to="/">Project</Link>
    //     </div>
    //   </div>
    // </Aurora>
    <div className="w-full bg-transparent  p-4 flex justify-center sticky top-0 z-100  backdrop-blur-xl">
      <div className="w-full max-w-[1200px] flex justify-between items-center px-10">
        <div className="">
          <a to="/about" className="text-white font-bold text-5xl">
            LOGO
          </a>
        </div>
        <div className="flex gap-8 text-white font-Poppins ">
          <a
            href="#home"
            className="relative px-2 text-white font-bold transition-all duration-300 ease-in-out 
        before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all
         before:duration-300 hover:before:w-full before:rounded-full"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay=""
          >
            Home
          </a>
          <a
            href="#about"
            className="relative px-2 text-white font-bold transition-all duration-300 ease-in-out 
        before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all
         before:duration-300 hover:before:w-full before:rounded-full"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            About
          </a>
          <a
            href="#skills"
            className="relative px-2 text-white font-bold transition-all duration-300 ease-in-out 
        before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all
         before:duration-300 hover:before:w-full before:rounded-full"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            Skills
          </a>
          <a
            href="/#project"
            className="relative px-2 text-white font-bold transition-all duration-300 ease-in-out 
        before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all
         before:duration-300 hover:before:w-full before:rounded-full"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            Project
          </a>
        </div>
      </div>
    </div>
  );
}
