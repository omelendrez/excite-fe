import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import Home from "components/Home";

import Transportes from "components/transportes/Transportes";
import Transporte from "components/transportes/Transporte";
import TransporteForm from "components/transportes/TransporteForm";

import Clientes from "components/clientes/Clientes";
import Cliente from "components/clientes/Cliente";
import ClienteForm from "components/clientes/ClienteForm";

import Ivas from "components/ivas/Ivas";
import Iva from "components/ivas/Iva";
import IvaForm from "components/ivas/IvaForm";

import Porciva from "components/porciva/Porciva";

import Pagos from "components/pagos/Pagos";
import Pago from "components/pagos/Pago";
import PagoForm from "components/pagos/PagoForm";

import Vendedores from "components/vendedores/Vendedores";
import Vendedor from "components/vendedores/Vendedor";
import VendedorForm from "components/vendedores/VendedorForm";

import Tipos from "components/tipos/Tipos";
import Tipo from "components/tipos/Tipo";
import TipoForm from "components/tipos/TipoForm";

import Subtipos from "components/subtipos/Subtipos";
import Subtipo from "components/subtipos/Subtipo";
import SubtipoForm from "components/subtipos/SubtipoForm";

import Productos from "components/productos/Productos";
import Producto from "components/productos/Producto";
import ProductoForm from "components/productos/ProductoForm";

import Ajustes from "components/ajustes/Ajustes";
import Ajuste from "components/ajustes/Ajuste";
import AjusteForm from "components/ajustes/AjusteForm";

import Remitos from "components/remitos/Remitos";
import Remito from "components/remitos/Remito";
import RemitoForm from "components/remitos/RemitoForm";
import ItemForm from "components/remitos/ItemForm";

import Conceptos from "components/conceptos/Conceptos";
import Concepto from "components/conceptos/Concepto";
import ConceptoForm from "components/conceptos/ConceptoForm";

import Numeros from "components/numeros/Numeros";
import Numero from "components/numeros/Numero";
import NumeroForm from "components/numeros/NumeroForm";

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
      <Route exact path="/ivas" component={Ivas} />
      <Route exact path="/ivas/add/iva" component={IvaForm} />
      <Route exact path="/ivas/:id" component={Iva} />
      <Route exact path="/ivas/edit/:id" component={IvaForm} />

      {/* Porciva */}
      <Route exact path="/porciva" component={Porciva} />

      {/* Pagos */}
      <Route exact path="/pagos" component={Pagos} />
      <Route exact path="/pagos/add/pago" component={PagoForm} />
      <Route exact path="/pagos/:id" component={Pago} />

      {/* Vendedores */}
      <Route exact path="/vendedores" component={Vendedores} />
      <Route exact path="/vendedores/add/vendedor" component={VendedorForm} />
      <Route exact path="/vendedores/:id" component={Vendedor} />
      <Route exact path="/vendedores/edit/:id" component={VendedorForm} />

      {/* Tipos */}
      <Route exact path="/tipos" component={Tipos} />
      <Route exact path="/tipos/add/tipo" component={TipoForm} />
      <Route exact path="/tipos/:id" component={Tipo} />
      <Route exact path="/tipos/edit/:id" component={TipoForm} />

      {/* Subtipos */}
      <Route exact path="/subtipos" component={Subtipos} />
      <Route exact path="/subtipos/add/subtipo" component={SubtipoForm} />
      <Route exact path="/subtipos/:id" component={Subtipo} />
      <Route exact path="/subtipos/edit/:id" component={SubtipoForm} />

      {/* Productos */}
      <Route exact path="/productos" component={Productos} />
      <Route exact path="/productos/add/producto" component={ProductoForm} />
      <Route exact path="/productos/:id" component={Producto} />
      <Route exact path="/productos/edit/:id" component={ProductoForm} />

      {/* Ajustes */}
      <Route exact path="/ajustes" component={Ajustes} />
      <Route exact path="/ajustes/add/ajuste" component={AjusteForm} />
      <Route exact path="/ajustes/:id" component={Ajuste} />
      <Route exact path="/ajustes/edit/:id" component={AjusteForm} />

      {/* Conceptos */}
      <Route exact path="/conceptos" component={Conceptos} />
      <Route exact path="/conceptos/add/concepto" component={ConceptoForm} />
      <Route exact path="/conceptos/:id" component={Concepto} />
      <Route exact path="/conceptos/edit/:id" component={ConceptoForm} />

      {/* Remitos */}
      <Route exact path="/remitos" component={Remitos} />
      <Route exact path="/remitos/add/remito" component={RemitoForm} />
      <Route exact path="/remitos/:id" component={Remito} />
      <Route exact path="/remitos/items/add/item" component={ItemForm} />
      <Route exact path="/remitos/items/edit/:id" component={ItemForm} />

      {/* Números */}
      <Route exact path="/ultimos-numeros" component={Numeros} />
      <Route exact path="/ultimos-numeros/add/numero" component={NumeroForm} />
      <Route exact path="/ultimos-numeros/:id" component={Numero} />
      <Route exact path="/ultimos-numeros/edit/:id" component={NumeroForm} />
    </Content>
  );
};

export default Routes;
