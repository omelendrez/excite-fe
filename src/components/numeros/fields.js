const fields = [
  {
    name: "NUMCOD",
    title: "Código",
    type: "number",
    rules: [{ required: true }],
  },
  {
    name: "NUMDES",
    title: "Descripción",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "NUMVAL",
    title: "Valor",
    type: "number",
    rules: [{ required: true }],
  },
  {
    name: "NUMPV",
    type: "number",
    hidden: true,
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export default fields;
