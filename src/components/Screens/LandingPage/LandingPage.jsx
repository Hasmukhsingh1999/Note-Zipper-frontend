import React from "react";

const NavBarLink = ({ text }) => {
  return <p className="text-[#393e46]">{text}</p>;
};

const LandingPage = () => {
  return (
    <div className="md:py-5 md:px-5 py-6 h-screen w-full relative bg-[#f0ece2]">
      <nav className=" w-full py-1 md:px-9 px-5 flex items-center justify-between">
        <div className="flex gap-5">
          <NavBarLink text="Home" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="border border-gray-950 rounded-full py-2 px-5 md:text-base text-xs">Login</button>
            <button className="border border-gray-950 rounded-full py-2 px-5 md:text-base text-xs">Signup</button>
          </div>
          <div className="p-3 border border-gray-950 rounded-full md:flex hidden">
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
      <main className=" w-full md:min-h-[70vh] min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 gap-3 px-9">
          <div className="w-full flex items-center justify-center">
            <h1 className=" font text-center text-[#9c3122] border-b-2 border-[#393e46] font-spacing">
              NOTES-ZIPPER
            </h1>
          </div>
          <div className="h-[350px] w-full">
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
