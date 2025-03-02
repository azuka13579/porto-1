import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMusic, FaRocket, FaGlobe, FaFire } from "react-icons/fa";
import agsn from "../assets/agsn.jpg"; // Pastikan path gambar sesuai

export default function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative bg-zinc-900 text-white">
      {/* Background & Overlay */}
      <div className="absolute bg-gradient-to-b h-1/2 top-0 from-zinc-900 to-transparent w-full -z-[9]"></div>
      <img
        src={agsn}
        alt="Agrisymphony 2025"
        className="h-full w-full object-cover absolute top-0 left-0 -z-10 brightness-50"
      />

      {/* Section Title */}
      <div className="text-center pt-16 relative z-10">
        <h1
          className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          Perjalanan Agrisymphony
        </h1>
        <p
          className="text-gray-300 mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Sejak awal, Agrisymphony telah berkembang menjadi festival spektakuler
          yang mendunia!
        </p>
      </div>

      {/* Timeline */}
      <VerticalTimeline layout="">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(255, 255, 255, 0.2)",
          }}
          date="2015"
          iconStyle={{ background: "#f43f5e", color: "#fff" }}
          icon={<FaMusic />}
        >
          <h3 className="text-xl font-bold">Agrisymphony Perdana</h3>
          <p>Festival pertama yang hanya dihadiri oleh 500 orang di IPB.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
          }}
          date="2018"
          iconStyle={{ background: "#3b82f6", color: "#fff" }}
          icon={<FaRocket />}
        >
          <h3 className="text-xl font-bold">Go Nasional</h3>
          <p>
            Menampilkan artis nasional dan menarik lebih dari 5.000 pengunjung.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
          }}
          date="2020"
          iconStyle={{ background: "#10b981", color: "#fff" }}
          icon={<FaGlobe />}
        >
          <h3 className="text-xl font-bold">
            Pandemi dan Transformasi Virtual
          </h3>
          <p>
            Festival tetap berjalan dengan format virtual dan diikuti 20.000
            peserta daring.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
          }}
          date="2023"
          iconStyle={{ background: "#eab308", color: "#fff" }}
          icon={<FaFire />}
        >
          <h3 className="text-xl font-bold">Rekor 50.000 Pengunjung</h3>
          <p>
            Festival terbesar dalam sejarah dengan artis internasional dan
            teknologi panggung canggih.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
