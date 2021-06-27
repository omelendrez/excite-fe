import React from "react";
import { Layout, Spin } from "antd";
import { useSelector } from "react-redux";
import Header from "./common/Header";
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
      <Layout>
        <Header title="Home" />
        {!loading && <div className="home" />}
      </Layout>
    </>
  );
};

export default Home;
