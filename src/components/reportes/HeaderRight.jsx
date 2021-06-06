import React from "react";
import { Layout } from "antd";

const HeaderRight = (props) => {
  const { date, time, page } = props;
  return (
    <Layout>
      <div className="header-right">
        <div>{date}</div>
        <div>{time}</div>
        <div>{page}</div>
      </div>
    </Layout>
  );
};

export default HeaderRight;
