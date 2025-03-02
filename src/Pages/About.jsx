import React, { useEffect } from "react";
import agsn from "../assets/agsn.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "../component/Timeline2";
import Masonry from "../component/Masonry";
import Navbaragsn from "../component/Navbaragsn";

export default function About() {
  const data = [
    { id: 1, image: "https://picsum.photos/id/10/200/300", height: 600 },
    { id: 2, image: "https://picsum.photos/id/14/200/300", height: 300 },
    { id: 3, image: "https://picsum.photos/id/15/200/300", height: 1000 },
    { id: 4, image: "https://picsum.photos/id/16/200/300", height: 600 },
    { id: 9, image: "https://picsum.photos/id/85/200/300", height: 800 },
    { id: 10, image: "https://picsum.photos/id/103/200/300", height: 600 },
    { id: 3, image: "https://picsum.photos/id/15/200/300", height: 300 },
    { id: 4, image: "https://picsum.photos/id/16/200/300", height: 300 },
    { id: 5, image: "https://picsum.photos/id/17/200/300", height: 300 },
    { id: 6, image: "https://picsum.photos/id/19/200/300", height: 700 },
    { id: 7, image: "https://picsum.photos/id/37/200/300", height: 200 },
    { id: 8, image: "https://picsum.photos/id/39/200/300", height: 500 },
    { id: 9, image: "https://picsum.photos/id/85/200/300", height: 500 },
    { id: 10, image: "https://picsum.photos/id/103/200/300", height: 600 },
  ];

  return (
    <div className="">
      <div className="h-screen flex flex-col justify-center items-center text-white relative overflow-hidden font-Poppins">
        {/* Navbar */}
        <Navbaragsn></Navbaragsn>

        {/* Background Image */}
        <img
          src={agsn}
          alt="Agrisyhmphony 2025"
          className="h-full w-full object-cover absolute top-0 left-0 -z-10 brightness-50"
        />
        <div className="absolute left-10 w-40 h-40 bg-pink-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-400 blur-3xl opacity-30 animate-pulse" />

        {/* Content */}
        <div
          className="text-center font-Poppins px-6 md:px-12 flex flex-col justify-center items-center h-full"
          data-aos="fade-up"
        >
          <h1 className="font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-pink-400 via-white to-blue-400 text-transparent bg-clip-text drop-shadow-lg uppercase tracking-wide animate-pulse">
            Agrisyhmphony 2025
          </h1>
          <h2
            className="text-xl md:text-3xl mt-4 font-semibold tracking-widest text-blue-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            The Greatest Wonderfest
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Experience the most mesmerizing festival of the year! A night full
            of music, lights, and wonders awaits you. Don't miss the magic!
          </p>
          <a
            href="#about"
            className="mt-6 px-6 py-3 z-10 bg-blue-400 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            What is AGSN?
          </a>

          <div className="h-1/2 w-screen bg-gradient-to-b from-transparent to-zinc-900 absolute bottom-0"></div>
        </div>
      </div>
      {/* Section 2 - Abstract About Agrisymphony */}
      <div
        id="about"
        className="bg-zinc-900 text-white flex flex-col pl-16 py-8 relative overflow-hidden "
      >
        <div className="absolute left-10 top-1/2 w-40 h-40 bg-pink-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-400 blur-3xl opacity-30 animate-pulse" />

        <div className="flex">
          <div className="w-3/5">
            <h1
              data-aos="fade-right"
              data-aos-duration="800"
              className="pb-4 mb-2 font-montserrat font-bold text-6xl bg-gradient-to-r from-pink-400 to-white text-transparent bg-clip-text"
            >
              Agrisymphony 2025
            </h1>
            <p
              className="font-montserrat text-left font-light text-lg"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              suscipit officiis reiciendis repudiandae ullam iusto mollitia eum
              sunt esse, odit illo earum alias in magni adipisci minus explicabo
              sapiente assumenda!
            </p>
            <h1
              data-aos="fade-right"
              data-aos-duration="800"
              className="pb-2 mt-4 font-montserrat font-bold text-4xl bg-gradient-to-r from-pink-400 to-white text-transparent bg-clip-text"
            >
              Sejarah
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              className="font-montserrat text-left font-light "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              suscipit officiis reiciendis repudiandae ullam iusto mollitia eum
              sunt esse, odit illo earum alias in magni adipisci minus explicabo
              sapiente assumenda!
            </p>
            <h1
              data-aos="fade-right"
              data-aos-duration="800"
              className="pb-2 mt-4 font-montserrat font-bold text-4xl bg-gradient-to-r from-pink-400 to-white text-transparent bg-clip-text"
            >
              Sejarah
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              className="font-montserrat text-left font-light"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              suscipit officiis reiciendis repudiandae ullam iusto mollitia eum
              sunt esse, odit illo earum alias in magni adipisci minus explicabo
              sapiente assumenda! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ratione suscipit officiis reiciendis repudiandae
              ullam iu assumenda!
            </p>
          </div>
          <div className="kanan flex-1 flex justify-center items-center px-16">
            <img
              src={agsn}
              alt=""
              className="h-full object-cover rounded-full"
              data-aos="fade-up"
              data-aos-duration="800"
            />
          </div>
        </div>
      </div>
      {/* Section 3 - Abstract About Agrisymphony */}
      <Timeline></Timeline>
      <div id="archive" className="bg-zinc-900">
        <h1
          data-aos="fade-up"
          className="font-extrabold text-5xl md:text-5xl text-center bg-gradient-to-r from-yellow-400 via-white to-blue-400 text-transparent bg-clip-text drop-shadow-lg uppercase tracking-wide"
        >
          Agrisyhmphony 2024
        </h1>
        <p
          data-aos="fade-up"
          className="text-white tracking-widest text-center text-2xl"
        >
          Gallery
        </p>
        <Masonry data={data} />;
      </div>
    </div>
  );
}
