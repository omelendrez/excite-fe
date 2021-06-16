import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, ConfigProvider, Spin } from "antd";

import es_ES from "antd/lib/locale/es_ES";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Menu from "./components/Menu";
import Routes from "./components/Routes";

import { wakeUp } from "redux/actions";

const { Footer, Sider } = Layout;

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.wakeUp);

  console.log(loading);

  const [state, setState] = useState({ collapsed: false });
  const { collapsed } = state;

  const onCollapse = (collapsed) => {
    setState({ ...state, collapsed });
  };

  useEffect(() => {
    dispatch(wakeUp());
  }, [dispatch]);

  if (loading) {
    return <Spin />;
  }

  return (
    <ConfigProvider locale={es_ES}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu />
          </Sider>
          <Layout>
            <Routes />
            <Footer
              style={{
                textAlign: "center",
                backgroundColor: "#fff",
                height: 48,
                padding: 12,
              }}
            >
              Excite Fragancias ©2021
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
