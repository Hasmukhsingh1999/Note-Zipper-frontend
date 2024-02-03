"use client";
import { useState } from "react";
import { Input, Space, Card } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Link from "next/link";


const Page = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1584448097639-99cf648e8def?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
    <div className="w-full flex ">
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
            title="Sign In"
            className="md:w-[450px] w-[340px] mx-auto"
            style={cardStyle}
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="text-left flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  placeholder="Enter your email"
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
                Not a user? <Link href="/sign-up">Create account</Link>
              </div>
              <button
                className="p-2 bg-gray-800 text-white hover:rounded-full transition duration-300"
                onClick={() => console.log("Sign In clicked")}
              >
                Sign In
              </button>
            </div>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default Page;
