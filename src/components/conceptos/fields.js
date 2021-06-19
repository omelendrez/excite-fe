const fields = [
  {
    name: "CONNUM",
    title: "Número",
    type: "number",
    readonly: true,
  },
  {
    name: "CONFEC",
    title: "Fecha",
    type: "date",
    rules: [{ required: true }],
  },
  {
    name: "CONDES",
    title: "Descripción",
    type: "text",
    size: 60,
  },
  {
    name: "CONCLI",
    title: "Cliente",
    type: "select",
    options: "clientes",
  },
  {
    name: "CONCANDEB",
    title: "Débito",
    type: "amount",
  },
  {
    name: "CONCANHAB",
    title: "Crédito",
    type: "amount",
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export default fields;
