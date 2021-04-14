const fields = [
  {
    name: "AJUNUM",
    title: "Número",
    type: "number",
    readonly: true,
  },
  {
    name: "AJUFEC",
    title: "Fecha",
    type: "date",
    rules: [{ required: true }],
  },
  {
    name: "PRODCOD",
    title: "Producto",
    type: "select",
    options: "productos",
    rules: [{ required: true }],
  },
  {
    name: "AJUCAN",
    title: "Cantidad",
    type: "number",
    rules: [{ required: true }],
  },
];

export default fields;
