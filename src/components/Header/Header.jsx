"use client";
import { Layout, Menu } from "antd";
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
        <div className="" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Menu.Item>Home</Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default Headers;
