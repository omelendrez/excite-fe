import React from 'react'
import { Link } from 'react-router-dom'
import { Menu as AntdMenu } from 'antd'
import {
  SettingOutlined,
  TeamOutlined,
  HomeOutlined,
  CarOutlined,
  IdcardOutlined,
  ShoppingOutlined,
  FileTextOutlined,
  FundProjectionScreenOutlined
} from '@ant-design/icons'

const { SubMenu } = AntdMenu

const Menu = () => {
  return (
    <AntdMenu
      theme="dark"
      defaultSelectedKeys={['0']}
      mode="inline"
      className="no-print"
    >
      <AntdMenu.Item key="0" icon={<HomeOutlined />}>
        Home
        <Link to="/" />
      </AntdMenu.Item>

      {/* Transportes */}
      <SubMenu key="sub1" icon={<CarOutlined />} title="Transportes">
        <AntdMenu.Item key="1">
          ABM Transportes
          <Link to="/transportes" />
        </AntdMenu.Item>
      </SubMenu>

      {/* Clientes */}
      <SubMenu key="sub2" icon={<IdcardOutlined />} title="Clientes">
        <AntdMenu.Item key="3">
          ABM Clientes
          <Link to="/clientes" />
        </AntdMenu.Item>

        <AntdMenu.Item key="4">
          Condición de IVA
          <Link to="/ivas" />
        </AntdMenu.Item>

        <AntdMenu.Item key="5">
          Porcentaje IVA
          <Link to="/porciva" />
        </AntdMenu.Item>

        <AntdMenu.Item key="6">
          Realizar Pagos
          <Link to="/pagos" />
        </AntdMenu.Item>

        <AntdMenu.Item key="14">
          Imputar Conceptos
          <Link to="/conceptos" />
        </AntdMenu.Item>
      </SubMenu>

      {/* Vendedores */}
      <SubMenu key="sub3" icon={<TeamOutlined />} title="Vendedores">
        <AntdMenu.Item key="7">
          ABM Vendedores
          <Link to="/vendedores" />
        </AntdMenu.Item>
      </SubMenu>

      {/* Productos */}
      <SubMenu key="sub4" icon={<ShoppingOutlined />} title="Productos">
        <AntdMenu.Item key="8">
          ABM Tipos
          <Link to="/tipos" />
        </AntdMenu.Item>

        <AntdMenu.Item key="9">
          ABM Subtipos
          <Link to="/subtipos" />
        </AntdMenu.Item>

        <AntdMenu.Item key="10">
          ABM Productos
          <Link to="/productos" />
        </AntdMenu.Item>

        <AntdMenu.Item key="11">
          Ajustes de Stock
          <Link to="/ajustes" />
        </AntdMenu.Item>
      </SubMenu>

      {/* Documentos */}
      <SubMenu key="sub6" icon={<FileTextOutlined />} title="Documentos">
        <AntdMenu.Item key="12">
          Presupuestos y Facturas
          <Link to="/remitos" />
        </AntdMenu.Item>

        <AntdMenu.Item key="13">
          Deudores
          <Link to="/deudores" />
        </AntdMenu.Item>
      </SubMenu>

      <SubMenu
        key="sub8"
        icon={<FundProjectionScreenOutlined />}
        title="Reporte de Ventas"
      >
        <AntdMenu.Item key="15">
          Ventas por Producto
          <Link to="/reportes/ventas/producto" />
        </AntdMenu.Item>

        <AntdMenu.Item key="16">
          Ventas por Subtipo
          <Link to="/reportes/ventas/subtipo" />
        </AntdMenu.Item>
      </SubMenu>

      {/* Mantenimiento */}
      <SubMenu key="sub9" icon={<SettingOutlined />} title="Mantenimiento">
        <AntdMenu.Item key="17">
          Últimos números
          <Link to="/ultimos-numeros" />
        </AntdMenu.Item>
      </SubMenu>
    </AntdMenu>
  )
}

export default Menu
