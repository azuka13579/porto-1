import React from "react";
import SpotlightCard from "./SpotlightCard";
export default function Spotlightjadi(props) {
  return (
    <SpotlightCard
      className="custom-spotlight-card text-white text-2xl p-4 "
      spotlightColor="rgba(0, 229, 255, 0.2)"
      delay={props.delay}
    >
      <h1 className="font-bold">Azka Raditya</h1>
      <h1 className="font-light text-lg mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam est
        tempore odio saepe, id reiciendis quod culpa praesentium ut? Lorem ipsum
        dolor sit amet
      </h1>
      <button
        className="relative group overflow-hidden px-6 py-3 text-white font-bold rounded-lg bg-blue-500/80 transition-all duration-300 ease-in-out w-48 mt-4
        before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:text-blue-500"
      >
        <span className="relative z-10 group-hover:text-slate-800 transition font-bold">
          Look
        </span>
      </button>
    </SpotlightCard>
  );
}
