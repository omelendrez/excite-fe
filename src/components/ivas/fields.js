const fields = [
  {
    name: "IVACOD",
    title: "Código",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "IVADES",
    title: "Descripción",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "IVAEST",
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