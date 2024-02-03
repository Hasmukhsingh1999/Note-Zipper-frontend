"use client";
import { useCreateUserMutation } from "@/api/auth-api";
import AuthPage from "@/components/Auth/AuthPage";
import axios from "axios";
import React from "react";


const page = () => {
  const [createUser,{data}] = useCreateUserMutation()
  const handleSignUp = async ({ username, email, password }) => {
    try {
      // Make the API call to create a new user
      // const result = await createUser({
      //   username,
      //   email,
      //   password,
      // });

      const axiosResult = await axios.post("http://localhost:8000/api/users", {
        // Add the necessary data or parameters for your request
        username,
        email,
        password
      });

      // Handle the result of the Axios request
      console.log("Axios request result:", axiosResult.data);
      // Handle success, e.g., redirect to a new page
      console.log("User created successfully:", result);
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <AuthPage
        title="Sign Up"
        buttonLabel="Sign Up"
        onSubmit={handleSignUp}
        isRegistered={"Sign-up"}
      />
    </div>
  );
};

export default page;
