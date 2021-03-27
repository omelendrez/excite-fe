import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import Transportes from './components/transportes/Transportes';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App() {
  const [state, setState] = useState({ collapsed: false });
  const { collapsed } = state;

  const onCollapse = collapsed => {
    setState({ ...state, collapsed });
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            <Menu.Item key="0" icon={<PieChartOutlined />}>
              Home
              <Link to="/" />
            </Menu.Item>
            <SubMenu key="sub1" icon={<PieChartOutlined />} title="Transportes">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                ABM Transportes
              <Link to="/transportes" />
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="Clientes">
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

            <SubMenu key="sub3" icon={<PieChartOutlined />} title="Vendedores">
              <Menu.Item key="7" icon={<PieChartOutlined />}>
                ABM Vendedores
              <Link to="/vendedores" />
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub4" icon={<PieChartOutlined />} title="Productos">
              <Menu.Item key="8" icon={<PieChartOutlined />}>
                ABM Tipos
              <Link to="/tipos" />
              </Menu.Item>

              <Menu.Item key="9" icon={<PieChartOutlined />}>
                ABM Subtipos
              <Link to="/subtipos" />
              </Menu.Item>

              <Menu.Item key="10" icon={<PieChartOutlined />}>
                ABM Productos
              <Link to="/productos" />
              </Menu.Item>

              <Menu.Item key="11" icon={<PieChartOutlined />}>
                Ajustes de Stock
              <Link to="/ajustes" />
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub6" icon={<PieChartOutlined />} title="Documentos">
              <Menu.Item key="13" icon={<PieChartOutlined />}>
                Presupuestos y Facturas
              <Link to="/presupuestos-facturas" />
              </Menu.Item>

              <Menu.Item key="14" icon={<PieChartOutlined />}>
                Conceptos
              <Link to="/conceptos" />
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub7" icon={<PieChartOutlined />} title="Mantenimiento">
              <Menu.Item key="15" icon={<PieChartOutlined />}>
                Últimos números
              <Link to="/ultimos-numeros" />
              </Menu.Item>
            </SubMenu>

          </Menu>

        </Sider>
        <Layout >
          <Content style={{ margin: '0 16px' }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/transportes" component={Transportes} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Excite Fragancias ©2021</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
