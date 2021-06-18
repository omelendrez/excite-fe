const fields = [
  {
    name: "TIPCOD",
    title: "Tipo",
    type: "select",
    options: "tipos",
    rules: [{ required: true }],
    size: 4,
    width: 200,
  },
  {
    name: "SUBTIPCOD",
    title: "Subtipo",
    type: "text",
    rules: [{ required: true }],
    size: 6,
    width: 200,
  },
  {
    name: "SUBTIPDES",
    title: "Nombre",
    type: "text",
    rules: [{ required: true }],
  },
  {git 
    name: "SUBTIPEST",
    title: "Estado",
    type: "select",
    options: "statuses",
    rules: [{ required: true }],
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export default fields;
