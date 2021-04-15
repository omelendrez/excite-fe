const fields = [
  {
    name: "TIPCOD",
    title: "Tipo",
    type: "select",
    options: "tipos"
  },
  {
    name: "SUBTIPCOD",
    title: "Subtipo",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "SUBTIPDES",
    title: "Nombre",
    type: "text",
    required: true,
  },
  {
    name: "SUBTIPEST",
    title: "Estado",
    type: "select",
    options: "estados",
  },
  {
    name: "ID",
    type: "number",
    hidden:true
  }
];

export default fields;
