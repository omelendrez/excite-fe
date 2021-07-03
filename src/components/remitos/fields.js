import { getSelectList } from "utils/helpers";

export const fields = [
  {
    name: "REMNUM",
    title: "Presupuesto",
    type: "number",
    readonly: true,
  },
  {
    name: "REMFEC",
    title: "Fecha",
    type: "date",
    rules: [{ required: true }],
  },
  {
    name: "CLICOD",
    title: "Cliente",
    type: "select",
    rules: [{ required: true }],
    options: "clientes",
    updater: true,
  },
  {
    name: "VENCOD",
    title: "Vendedor",
    type: "select",
    options: "vendedores",
    readonly: true,
  },
  {
    name: "REMFACNUM",
    title: "Factura",
    type: "number",
    readonly: true,
  },
  {
    name: "REMFACLET",
    title: "Tipo factura",
    type: "text",
    readonly: true,
  },
  {
    name: "ESTCOD",
    title: "Estado",
    type: "select",
    options: "estados",
    readonly: true,
  },
  {
    name: "REMPAGNUM",
    title: "Pago",
    type: "number",
    readonly: true,
  },
  {
    name: "REMDES",
    title: "Descuento",
    type: "amount",
    readonly: true,
  },
  {
    name: "REMEMI",
    title: "Emitido",
    type: "text",
    readonly: true,
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export const itemFields = (props) => {
  const { productos, handleSelectedValue } = props;
  return [
    {
      name: "REMNUM",
      title: "Número de remito",
      type: "number",
      readonly: true,
    },
    {
      name: "PRODCOD",
      title: "Producto",
      type: "select",
      options: "productos",
      updater: true,
      optionsModels: {
        productos: getSelectList("productos", productos.records),
      },
      getSelectedValue: handleSelectedValue,
      rules: [{ required: true }],
      defaultOpen: true,
    },
    {
      name: "REMCAN",
      title: "Cantidad",
      type: "number",
    },
    {
      name: "REMPRE",
      title: "Precio",
      type: "amount",
    },
    {
      name: "ID",
      type: "number",
      hidden: true,
    },
  ];
};
