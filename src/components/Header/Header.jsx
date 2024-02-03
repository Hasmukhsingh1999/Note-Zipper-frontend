"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Headers = () => {
  const [userDisplay, setUser] = useState();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log(user.username);
      setUser(user.username);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8080/api/logout");
      localStorage.removeItem("user");
      router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:py-5 md:px-5 py-6">
      {" "}
      <nav className=" w-full py-1 md:px-9 px-5 flex items-center justify-between">
        <div className="flex gap-5">
          <Link href={"/"}>
            <p className="text-4xl font-logo uppercase cursor-pointer">
              Desire.
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div className=" md:text-base text-xs font-semibold">
              <Link href={"/sign-up"} className="uppercase">
                {userDisplay}
              </Link>
            </div>
            <div className="  md:text-base text-xs">
              <Link href={"/sign-in"} onClick={handleLogout}>
                Logout
              </Link>
            </div>
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
    </div>
  );
};

export default Headers;
