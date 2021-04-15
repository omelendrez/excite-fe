const fields = [
  {
    name: "TIPCOD",
    title: "Tipo",
    type: "select",
    options: "tipos",
    rules: [{ required: true }],
  },
  {
    name: "SUBTIPCOD",
    title: "Subtipo",
    type: "text",
    rules: [{ required: true }],
    size: 3,
  },
  {
    name: "SUBTIPDES",
    title: "Nombre",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "SUBTIPEST",
    title: "Estado",
    type: "select",
    options: "estados",
    rules: [{ required: true }],
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export default fields;
