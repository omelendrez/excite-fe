import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";

import es_ES from "antd/lib/locale/es_ES";
import "antd/dist/antd.css";

import "./App.css";

import Menu from "./components/Menu";
import Routes from "./components/Routes";

const { Footer, Sider } = Layout;

function App() {
  const [state, setState] = useState({ collapsed: false });
  const { collapsed } = state;

  const onCollapse = (collapsed) => {
    setState({ ...state, collapsed });
  };

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
            <Footer style={{ textAlign: "center" }}>
              Excite Fragancias ©2021
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
