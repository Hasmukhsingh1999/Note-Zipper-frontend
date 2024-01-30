"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import Headers from "@/components/Header/Header";

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
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <Button onClick={onLoadMore} className="bg-gray-800 text-white">
        Load More
      </Button>
    </div>
  );
  const addMoreButton = (
    <div style={{ margin: "12px 0", padding: "2px" }}>
      <Button onClick={""} className="bg-gray-800 text-white ">
        Click to add more
      </Button>
    </div>
  );
  return (
    <div className="h-screen w-full  ">
      <Headers />
      <div className="p-12">
        {addMoreButton}
        <List
          className="demo-loadmore-list mt-5"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMoreButton}
          dataSource={list}
          renderItem={(item) => (
            <List.Item actions={generateActions()}>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name?.last}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>content</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Home;
