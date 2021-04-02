import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, ConfigProvider } from "antd";
import es_ES from "antd/lib/locale/es_ES";
import {
  SettingOutlined,
  TeamOutlined,
  HomeOutlined,
  CarOutlined,
  IdcardOutlined,
  ShoppingOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";

import Transportes from "./components/transportes/Transportes";
import Transporte from "./components/transportes/Transporte";

import Clientes from "./components/clientes/Clientes";

import Iva from "./components/iva/Iva";

import Porciva from "./components/porciva/Porciva";

import Pagos from "./components/pagos/Pagos";

import Vendedores from "./components/vendedores/Vendedores";

import Tipos from "./components/tipos/Tipos";

import Subtipos from "./components/subtipos/Subtipos";

import Productos from "./components/productos/Productos";

import Ajustes from "./components/ajustes/Ajustes";

import Remitos from "./components/remitos/Remitos";

import Conceptos from "./components/conceptos/Conceptos";

import Numeros from "./components/numeros/Numeros";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

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
            <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
              <Menu.Item key="0" icon={<HomeOutlined />}>
                Home
                <Link to="/" />
              </Menu.Item>
              <SubMenu key="sub1" icon={<CarOutlined />} title="Transportes">
                <Menu.Item key="1">
                  ABM Transportes
                  <Link to="/transportes" />
                </Menu.Item>
              </SubMenu>

              <SubMenu key="sub2" icon={<IdcardOutlined />} title="Clientes">
                <Menu.Item key="3">
                  ABM Clientes
                  <Link to="/clientes" />
                </Menu.Item>
                <Menu.Item key="4">
                  Condición de IVA
                  <Link to="/iva" />
                </Menu.Item>
                <Menu.Item key="5">
                  Porcentaje IVA
                  <Link to="/porciva" />
                </Menu.Item>
                <Menu.Item key="6">
                  Pagos de facturas
                  <Link to="/pagos" />
                </Menu.Item>
              </SubMenu>

              <SubMenu key="sub3" icon={<TeamOutlined />} title="Vendedores">
                <Menu.Item key="7">
                  ABM Vendedores
                  <Link to="/vendedores" />
                </Menu.Item>
              </SubMenu>

              <SubMenu key="sub4" icon={<ShoppingOutlined />} title="Productos">
                <Menu.Item key="8">
                  ABM Tipos
                  <Link to="/tipos" />
                </Menu.Item>

                <Menu.Item key="9">
                  ABM Subtipos
                  <Link to="/subtipos" />
                </Menu.Item>

                <Menu.Item key="10">
                  ABM Productos
                  <Link to="/productos" />
                </Menu.Item>

                <Menu.Item key="11">
                  Ajustes de Stock
                  <Link to="/ajustes" />
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub6"
                icon={<FileTextOutlined />}
                title="Documentos"
              >
                <Menu.Item key="13">
                  Presupuestos y Facturas
                  <Link to="/remitos" />
                </Menu.Item>

                <Menu.Item key="14">
                  Conceptos
                  <Link to="/conceptos" />
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub7"
                icon={<SettingOutlined />}
                title="Mantenimiento"
              >
                <Menu.Item key="15">
                  Últimos números
                  <Link to="/ultimos-numeros" />
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/transportes">
                <Transportes />
              </Route>

              <Route path="/transporte/:id">
                <Transporte />
              </Route>

              <Route path="/clientes">
                <Clientes />
              </Route>

              <Route path="/iva">
                <Iva />
              </Route>

              <Route path="/porciva">
                <Porciva />
              </Route>
              <Route path="/pagos">
                <Pagos />
              </Route>

              <Route path="/vendedores">
                <Vendedores />
              </Route>

              <Route path="/tipos">
                <Tipos />
              </Route>

              <Route path="/subtipos">
                <Subtipos />
              </Route>

              <Route path="/productos">
                <Productos />
              </Route>

              <Route path="/ajustes">
                <Ajustes />
              </Route>

              <Route path="/conceptos">
                <Conceptos />
              </Route>

              <Route path="/remitos">
                <Remitos />
              </Route>

              <Route path="/ultimos-numeros">
                <Numeros />
              </Route>
            </Content>
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
