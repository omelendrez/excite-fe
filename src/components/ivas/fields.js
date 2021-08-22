const fields = [
  {
    name: "IVACOD",
    title: "Código",
    type: "text",
    rules: [
      { required: true },
      { len: 1, message: "Código no puede contener más de un caracter" },
    ],
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
