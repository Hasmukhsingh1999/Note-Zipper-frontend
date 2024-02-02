"use client"

import Link from "next/link";
import React, { useEffect } from "react";

const LandingPage = () => {
  
  return (
    <div className="md:py-5 md:px-5 py-6 h-screen w-full relative bg-[#f0ece2]">
      <nav className=" w-full py-1 md:px-9 px-5 flex items-center justify-between">
        <div className="flex gap-5">
          <p className="text-4xl font-logo uppercase">Desire.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="border border-[#2a2438] rounded-full py-2 px-5 md:text-base text-xs">
              <Link href={"/sign-in"}>Login</Link>
            </button>
            <button className="border border-[#2a2438] rounded-full py-2 px-5 md:text-base text-xs">
              <Link href={"/sign-up"}>Signup</Link>
            </button>
          </div>
          <div className="p-3 border border-[#2a2438] rounded-full md:flex hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>

      <main className=" w-full md:min-h-[70vh] min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 gap-3 px-9">
          <div className="w-full flex items-center justify-center">
            <h1 className=" font text-center text-[#9c3122] border-b-2 border-[#393e46] font-spacing">
              NOTES-ZIPPER
            </h1>
          </div>
          <div className="md:h-[350px] h-[450px] w-full">
            <img
              src="https://i.pinimg.com/564x/61/df/86/61df86c8957fc8f28fada223d3c9a057.jpg"
              alt="Notes Zipper Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
