import React from "react";
import Navbar from "../component/Navbar";
import azka from "../assets/profile.png";
import SplitText from "../component/SplitText";
import SpotlightCard from "../component/SpotlightCard";

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-black text-white flex flex-col font-Poppins">
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
      <div className="h-screen flex items-center bg-black px-10">
        <div className="grid grid-cols-3 gap-5 bg-black">
          <SpotlightCard
            className="custom-spotlight-card text-white text-2xl p-4"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1 className="font-bold">Azka Raditya</h1>
            <h1 className="font-light text-lg mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              aliquam est tempore odio saepe, id reiciendis quod culpa
              praesentium ut?
            </h1>
            <button
              className="relative group overflow-hidden px-6 py-3 text-white font-bold rounded-lg bg-slate-800/80 transition-all duration-300 ease-in-out w-48 mt-4
        before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white/80 before:transition-all before:duration-300 hover:before:w-full before:text-blue-500"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <span className="relative z-10 group-hover:text-slate-800 transition font-bold">
                Contact Me
              </span>
            </button>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            Kjlkjdslfkjsdlkf skldfj sdkljf sljf lj
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            Kjlkjdslfkjsdlkf skldfj sdkljf sljf lj
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
