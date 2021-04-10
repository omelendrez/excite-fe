import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import Home from "../components/Home";

import Transportes from "../components/transportes/Transportes";
import Transporte from "../components/transportes/Transporte";
import TransporteForm from "../components/transportes/TransporteForm";

import Clientes from "../components/clientes/Clientes";
import Cliente from "../components/clientes/Cliente";
import ClienteForm from "../components/clientes/ClienteForm";

import Iva from "../components/iva/Iva";

import Porciva from "../components/porciva/Porciva";

import Pagos from "../components/pagos/Pagos";

import Vendedores from "../components/vendedores/Vendedores";
import Vendedor from "../components/vendedores/Vendedor";
import VendedorForm from "../components/vendedores/VendedorForm";

import Tipos from "../components/tipos/Tipos";

import Subtipos from "../components/subtipos/Subtipos";

import Productos from "../components/productos/Productos";
import Producto from "../components/productos/Producto";
import ProductoForm from "../components/productos/ProductoForm";

import Ajustes from "../components/ajustes/Ajustes";

import Remitos from "../components/remitos/Remitos";

import Conceptos from "../components/conceptos/Conceptos";

import Numeros from "../components/numeros/Numeros";

const { Content } = Layout;

const Routes = () => {
  return (
    <Content style={{ margin: "0 16px" }}>
      <Route exact path="/" component={Home} />

      {/* Tranportes */}
      <Route exact path="/transportes" component={Transportes} />
      <Route
        exact
        path="/transportes/add/transporte"
        component={TransporteForm}
      />
      <Route exact path="/transportes/:id" component={Transporte} />
      <Route exact path="/transportes/edit/:id" component={TransporteForm} />

      {/* Clientes */}
      <Route exact path="/clientes" component={Clientes} />
      <Route exact path="/clientes/add/cliente" component={ClienteForm} />
      <Route exact path="/clientes/:id" component={Cliente} />
      <Route exact path="/clientes/edit/:id" component={ClienteForm} />

      {/* Iva */}
      <Route exact path="/iva" component={Iva} />

      {/* Porciva */}
      <Route exact path="/porciva" component={Porciva} />

      {/* Pagos */}
      <Route exact path="/pagos" component={Pagos} />

      {/* Vendedores */}
      <Route exact path="/vendedores" component={Vendedores} />
      <Route exact path="/vendedores/add/vendedor" component={VendedorForm} />
      <Route exact path="/vendedores/:id" component={Vendedor} />
      <Route exact path="/vendedores/edit/:id" component={VendedorForm} />

      {/* Tipos */}
      <Route exact path="/tipos" component={Tipos} />

      {/* Subtipos */}
      <Route exact path="/subtipos" component={Subtipos} />

      {/* Productos */}
      <Route exact path="/productos" component={Productos} />
      <Route exact path="/productos/add/producto" component={ProductoForm} />
      <Route exact path="/productos/:id" component={Producto} />
      <Route exact path="/productos/edit/:id" component={ProductoForm} />

      {/* Ajustes */}
      <Route exact path="/ajustes" component={Ajustes} />

      {/* Conceptos */}
      <Route exact path="/conceptos" component={Conceptos} />

      {/* Remitos */}
      <Route exact path="/remitos" component={Remitos} />

      {/* Números */}
      <Route exact path="/ultimos-numeros" component={Numeros} />
    </Content>
  );
};

export default Routes;
