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
  {
    name: "AJUOBS",
    title: "Observaciones",
    type: "textarea",
    rows: 2,
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export default fields;
