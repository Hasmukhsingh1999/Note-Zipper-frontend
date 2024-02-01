"use client";
import { store } from "@/feature/store";
import React from "react";
import { Provider } from "react-redux";

const Wrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
