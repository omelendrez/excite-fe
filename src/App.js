import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";

import es_ES from "antd/lib/locale/es_ES";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";

import "./App.scss";

import Menu from "./components/Menu";
import Routes from "./components/Routes";

import { wakeUp } from "redux/actions";

const { Footer, Sider } = Layout;

function App() {
  const dispatch = useDispatch();

  const [state, setState] = useState({ collapsed: false });
  const { collapsed } = state;

  const onCollapse = (collapsed) => {
    setState({ ...state, collapsed });
  };

  useEffect(() => {
    dispatch(wakeUp());
  }, [dispatch]);

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
