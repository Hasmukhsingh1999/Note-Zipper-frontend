"use client"
import AuthPage from "@/components/Auth/AuthPage";
import React from "react";

const page = () => {
  const handleSignIn = () => {
    console.log("Sign In clicked");
  };

  return (
    <div>
      <AuthPage title="Sign In" buttonLabel="Sign In" onSubmit={handleSignIn} />
    </div>
  );
};

export default page;
