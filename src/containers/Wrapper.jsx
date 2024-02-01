"use client";
import React from "react";
import { Provider } from "react-redux";

const Wrapper = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default Wrapper;
