const fields = [
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
  {
    name: "PRODSINI",
    type: "number",
    hidden: true,
  },
  {
    name: "PRODCOM",
    type: "text",
    hidden: true,
  },
  {
    name: "PRODCOD",
    title: "Código",
    type: "text",
    width: 100,
  },
  {
    name: "PRODDES",
    title: "Descripción",
    type: "text",
    rules: [{ required: true }],
  },
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
    type: "select",
    options: "subtipos",
    rules: [{ required: true }],
  },
  {
    name: "PRODSEX",
    title: "Sexo",
    type: "select",
    options: "sexos",
  },
  {
    name: "PRODPRE",
    title: "Precio",
    type: "amount",
    width: 200,
    rules: [{ required: true }],
  },
  {
    name: "PRODSTO",
    title: "Stock actual",
    type: "number",
    width: 200,
    rules: [{ required: true }],
  },
  {
    name: "PRODEST",
    title: "Estado",
    type: "select",
    options: "estado",
  },
];

export default fields;
