"use client";
import { Layout, Menu, Avatar } from "antd";
import React from "react";
const { Header } = Layout;

const Headers = () => {
  return (
    <div>
      {" "}
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <div>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>My Notes</Menu.Item>
          </div>
          <div className="flex justify-end flex-1">
            <Menu.Item>My Profile </Menu.Item>
            <Menu.Item>Logout</Menu.Item>
          </div>
        </Menu>
      </Header>
    </div>
  );
};

export default Headers;
