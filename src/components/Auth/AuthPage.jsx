"use client";
import React, { useState } from "react";
import { Card, Input, Space } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import Link from "next/link";

const AuthPage = ({ title, buttonLabel, onSubmit, isRegistered }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex w-full">
      <div className="flex-auto w-32 h-screen bg-red-950">
        <div className="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1584448097764-374f81551427?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover "
            alt="Background"
          />
        </div>
      </div>
      <div className="flex-auto w-64 h-screen flex items-center justify-center">
        <Space direction="vertical" size={16}>
          <Card
            title={title}
            style={{
              width: 400,
              textAlign: "center",
              boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            {title === "Sign Up" && (
              <div className="text-left flex flex-col gap-3">
                <label htmlFor="email">Email</label>
                <Input id="email" placeholder="Enter your email" />
              </div>
            )}
            <div className="grid grid-cols-1 gap-3">
              <div className="text-left flex flex-col gap-3">
                <label htmlFor="username">Username</label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </div>
              <div className="text-left flex flex-col gap-3     ">
                <label htmlFor="password">Password</label>
                <Input.Password
                  id="password"
                  placeholder="Input password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </div>
              {isRegistered !== "Sign-up" ? (
                <div>
                  Not a user? <Link href={"/sign-up"}>Create account</Link>
                </div>
              ) : (
                <div>
                  Already a user? <Link href={"/sign-in"}>Log into your account</Link>
                </div>
              )}
              <button
                className="p-2 bg-gray-800 text-white  hover:rounded-full transition duration-300"
                onClick={onSubmit}
              >
                {buttonLabel}
              </button>
            </div>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default AuthPage;
