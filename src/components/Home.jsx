import React from "react";
import { Layout, Spin } from "antd";
import { useSelector } from "react-redux";
import "./home.css";

const Home = (props) => {
  const { loading } = useSelector((state) => state.wakeUp);

  return (
    <>
      {loading && (
        <div className="spinner">
          <Spin size="large" />
        </div>
      )}
      <Layout>{!loading && <div className="home" />}</Layout>
    </>
  );
};

export default Home;
