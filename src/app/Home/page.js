"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import Headers from "@/components/Header/Header";
import NotesCard from "@/components/Notes-Card/Notes-card";

const API_URL = "https://randomuser.me/api/";
const RESULTS_COUNT = 3;

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

const generateActions = () => [
  <a key="list-loadmore-edit">edit</a>,
  <a key="list-loadmore-more">more</a>,
];

const Home = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const results = await fetchData(
          `${API_URL}?results=${RESULTS_COUNT}&inc=name,gender,email,nat,picture&noinfo`
        );
        setInitLoading(false);
        setData(results);
        setList(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const onLoadMore = async () => {
    setLoading(true);
    setList((prevList) => [
      ...prevList,
      ...Array.from({ length: RESULTS_COUNT }, () => ({
        loading: true,
        name: {},
        picture: {},
      })),
    ]);

    try {
      const moreData = await fetchData(
        `${API_URL}?results=${RESULTS_COUNT}&inc=name,gender,email,nat,picture&noinfo`
      );
      const newData = [...data, ...moreData];
      setData(newData);
      setList(newData);
      setLoading(false);
      window.dispatchEvent(new Event("resize"));
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  const loadMoreButton = !initLoading && !loading && (
    <div style={{ margin: "20px 0" }}>
      <button
        onClick={onLoadMore}
        className="p-2 px-5 border-gray-800 border hover:rounded-full transition-all duration-300 ease-out"
      >
        Load More
      </button>
    </div>
  );
  const addMoreButton = (
    <div style={{ margin: "12px 0", padding: "2px" }}>
      <button
        onClick={""}
        className="p-2 px-5 border-gray-800 border  hover:rounded-full transition-all duration-300 ease-out"
      >
        Click to add more
      </button>
    </div>
  );
  return (
    <div className="min-h-screen w-full ">
      <Headers />
      <div className="px-12 p-3 overflow-y-auto min-h-auto">
        <div className="flex md:flex-row flex-col gap-5 md:items-center items-start w-full justify-between">
          <p className="font-logo md:text-8xl text-6xl">NOTES</p>
          {addMoreButton}
        </div>
        <NotesCard data={list}/>
        {loadMoreButton}
      </div>
    </div>
  );
};

export default Home;
