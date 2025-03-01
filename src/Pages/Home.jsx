import React from "react";
import Navbar from "../component/Navbar";
import azka from "../assets/profile.png";
import SplitText from "../component/SplitText";
import Spotlightjadi from "../component/Spotlightjadi";
import SpotlightCard from "../component/SpotlightCard";
import { FaJs, FaNode, FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black scroll-smooth">
      <div
        id="home"
        className="h-screen bg-black text-white flex flex-col font-Poppins"
      >
        <Navbar></Navbar>
        <div className="flex flex-1">
          <div className="w-3/5 flex  items-center h-full">
            <div className="flex pl-20 flex-col justify-center">
              <div className="">
                <SplitText
                  text="Hello!!! My name is"
                  className="text-5xl font-light text-left"
                  delay={100}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </div>
              <h1
                className="font-bold text-8xl"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <span className="text-[#00aae9]">Azka</span> Raditya
              </h1>
              <h1
                className="font-lg font-light mt-5"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="150"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates iure hic enim labore iusto delectus adipisci
                quibusdam iste blanditiis perferendis numquam quis, a dolore
                vero ex neque rerum tempora obcaecati!
              </h1>
              <button
                className="relative group overflow-hidden px-6 py-3 text-white font-bold rounded-lg bg-blue-500 transition-all duration-300 ease-in-out w-48 mt-4
        before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white before:transition-all before:duration-300 hover:before:w-full before:text-blue-500"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <span className="relative z-10 group-hover:text-blue-500 transition font-bold">
                  Contact Me
                </span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={azka}
              alt=""
              className="w-full aspect-square object-cover"
              data-aos="fade-up"
              data-aos-duration="800"
            />
          </div>
        </div>
      </div>
      {/* SEKSION 2 */}
      <div
        id="about"
        className="bg-black px-20 font-Poppins flex flex-col gap-4"
      >
        <div className="">
          <h1
            className="text-white text-6xl font-bold "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            About Me
          </h1>
          <h1
            className="text-[#00aae9] text-lg font-light tracking-widest"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-anchor-placement="bottom-bottom"
          >
            My Identity and Study
          </h1>
        </div>
        <div className="text-white tracking-widest">
          <SpotlightCard>
            <div className="flex">
              <div className="flex-1">
                <h1 className="text-5xl font-bold mb-2">Identity</h1>
                <div className="flex ">
                  <div className="font-bold">
                    <h1>Name</h1>
                    <h1>Born</h1>
                    <h1>City</h1>
                    <h1>University</h1>
                    <h1>Major</h1>
                  </div>
                  <div className="flex-1 ml-4">
                    <h1>: Azka Raditya Hafidz</h1>
                    <h1>: 28 December 2005</h1>
                    <h1>: Bekasi</h1>
                    <h1>: IPB University</h1>
                    <h1>: Statistic and Data Science</h1>
                  </div>
                </div>
                <h1 className="text-5xl font-bold my-2">Education</h1>
                <div className="flex ">
                  <div className="font-bold">
                    <h1>Middle School</h1>
                    <h1>High School</h1>
                    <h1>College</h1>
                  </div>
                  <div className="flex-1 ml-4">
                    <h1>: SMP Negeri 8 Kota Bekasi</h1>
                    <h1>: SMA Negeri 3 Kota Bekasi</h1>
                    <h1>: IPB University</h1>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src={azka}
                  alt=""
                  className="h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* SEKSOION 3 */}
      <div id="skills" className="bg-black px-20 font-Poppins mt-20 ">
        <div className="">
          <h1
            className="text-white text-6xl font-bold"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay=""
          >
            My Skills
          </h1>
          <h1
            className="text-[#00aae9] text-lg font-light tracking-widest"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay=""
            data-aos-anchor-placement="bottom-bottom"
          >
            I like to learn about anything
          </h1>
          <div className="flex flex-col gap-4 mt-4">
            <div
              className="text-[#00aae9] text-7xl flex justify-around"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <FaJs className="rounded-full bg-slate-700/40 p-2 hover:bg-[#00aae9] hover:text-black transition duration-300"></FaJs>
              <FaPython className="rounded-full bg-slate-700/40 p-2 hover:bg-[#00aae9] hover:text-black transition duration-300"></FaPython>
              <FaJava className="rounded-full bg-slate-700/40 p-2 hover:bg-[#00aae9] hover:text-black transition duration-300"></FaJava>
            </div>
            <div
              className="text-[#00aae9] text-7xl flex justify-between"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay=""
            >
              <FaLaravel className="rounded-full bg-slate-700/40 p-2 hover:bg-[#00aae9] hover:text-black transition duration-300"></FaLaravel>
              <FaNodeJs className="rounded-full bg-slate-700/40 p-2 hover:bg-[#00aae9] hover:text-black transition duration-300"></FaNodeJs>
              <RiTailwindCssFill className="rounded-full bg-slate-700/40 p-2 hover:bg-[#00aae9] hover:text-black transition duration-300"></RiTailwindCssFill>
              <IoLogoJavascript className="rounded-full bg-slate-700/40 p-2 hover:bg-[#00aae9] hover:text-black transition duration-300"></IoLogoJavascript>
            </div>
          </div>
        </div>
      </div>

      <div id="project" className="px-20 mt-20">
        <h1
          className="text-white text-6xl font-bold"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay=""
        >
          My Project
        </h1>
        <h1
          className="text-[#00aae9] text-lg font-light tracking-widest"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay=""
          data-aos-anchor-placement="bottom-bottom"
        >
          I have been finished some project
        </h1>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <Spotlightjadi></Spotlightjadi>
          <Spotlightjadi delay="100"></Spotlightjadi>
          <Spotlightjadi delay="200"></Spotlightjadi>
          <Spotlightjadi delay="300"></Spotlightjadi>
        </div>
      </div>

      <div className="h-24 text-white flex justify-center items-center">
        <h1>&copy; Copyright azka 2025</h1>
      </div>
    </div>
  );
}
