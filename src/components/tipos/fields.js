const fields = [
  {
    name: "TIPCOD",
    title: "Tipo",
    type: "text",
    rules: [{ required: true }],
    size: 4,
    width: 80,
  },
  {
    name: "TIPDES",
    title: "Nombre",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "TIPEST",
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
