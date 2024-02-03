"use client";
import { useCreateUserMutation } from "@/api/auth-api";
import AuthPage from "@/components/Auth/AuthPage";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Card, Input, Space, message } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import Link from "next/link";
const page = () => {
  const [createUser, { data }] = useCreateUserMutation();
  const handleSignUp = async ({ name, email, password }) => {
    try {
      // Make the API call to create a new user
      // const result = await createUser({
      //   username,
      //   email,
      //   password,
      // });

      const axiosResult = await axios.post("http://localhost:8000/api/users", {
        // Add the necessary data or parameters for your request
        name,
        email,
        password,
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

  const [passwordVisible, setPasswordVisible] = useState(false);

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1584448033614-882b971a36f3?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const cardStyle = {
    textAlign: "center",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    backgroundColor: "#fcf8f3",
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="w-full flex">
      <div className="flex-auto md:w-32 w-full h-screen md:flex hidden">
        <div className="w-full h-full">
          <img
            src={backgroundImageUrl}
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
      </div>
      <div className="flex-auto w-64 h-screen flex items-center justify-center relative">
        <img
          src={backgroundImageUrl}
          className="w-full h-full object-cover absolute md:hidden"
          alt="Background"
          style={imageStyle}
        />
        <Space direction="vertical" size={16}>
          <Card
            title={"Sign Up"}
            className="md:w-[450px] w-[340px] mx-auto"
            style={cardStyle}
          >
            <div className="grid grid-cols-1 gap-4">
              <>
                <div className="text-left flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    className="bg-transparent"
                  />
                </div>
              </>

              <div className="text-left flex flex-col gap-2">
                <label htmlFor="username">Username</label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  className="bg-transparent"
                />
              </div>
              <div className="text-left flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <Input.Password
                  id="password"
                  placeholder="Input password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  className="bg-transparent"
                />
              </div>
              <div>
                Already a user?{" "}
                <Link href={"/sign-in"}>Log into your account</Link>
              </div>
              <button
                className="p-2 bg-gray-800 text-white hover:rounded-full transition duration-300"
                onClick={""}
              >
                Sign Up
              </button>
            </div>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default page;
