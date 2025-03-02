import React from "react";
import { Link } from "react-router-dom";

export default function Navbaragsn() {
  return (
    <nav className="top-0 left-0 w-full p-4 flex justify-between items-center bg-slate-500s bg-opacity-90 text-blue-600z-10 shadow-md">
      <h1 className="text-2xl font-bold uppercase">Agrisyhmphony</h1>
      <ul className="flex space-x-6 z-10">
        <Link
          to="/about"
          className="hover:text-blue-300 transition cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="agsn"
          className="hover:text-blue-300 transition cursor-pointer"
        >
          About
        </Link>
        <a className="hover:text-blue-300 transition cursor-pointer">Tickets</a>
        <a
          href="#archive"
          className="hover:text-blue-300 transition cursor-pointer"
        >
          Archive
        </a>
      </ul>
    </nav>
  );
}
