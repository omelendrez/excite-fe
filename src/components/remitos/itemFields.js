const fields = [
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
    rules: [{ required: true }],
  },
  {
    name: "REMCAN",
    title: "Cantidad",
    type: "number",
    rules: [{ required: true }],
  },
  {
    name: "REMPRE",
    title: "Precio",
    type: "amount",
    rules: [{ required: true }],
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export default fields;
