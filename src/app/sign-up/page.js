"use client"
import AuthPage from "@/components/Auth/AuthPage";
import React from "react";

const page = () => {
  const handleSignUp = () => {
    console.log("Sign Up clicked");
  };
  return (
    <div>
      <AuthPage title="Sign Up" buttonLabel="Sign Up" onSubmit={handleSignUp} isRegistered={'Sign-up'}/>
    </div>
  );
};

export default page;
