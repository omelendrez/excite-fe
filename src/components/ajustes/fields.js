const fields = [
  {
    name: "AJUNUM",
    title: "Número",
    type: "text",
    width: 100,
    readonly: true,
  },
  {
    name: "AJUFEC",
    title: "Fecha",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "PRODDES",
    title: "Producto",
    type: "text",
    required: true,
  },
  {
    name: "AJUCAN",
    title: "Cantidad",
    type: "text",
  },
];

export default fields;
