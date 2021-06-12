export const fields = [
  {
    name: "PAGNUM",
    title: "Número de pago",
    type: "number",
    readonly: true,
  },
  {
    name: "PAGFEC",
    title: "Fecha",
    type: "date",
    rules: [{ required: true }],
  },
  {
    name: "CLICOD",
    title: "Cliente",
    type: "select",
    rules: [{ required: true }],
    options: "clientes",
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export const remitosFields = [
  {
    name: "PAGNUM",
    title: "Número de pago",
    type: "number",
    readonly: true,
  },
  {
    name: "REMNUM",
    title: "Remito",
    type: "number",
    rules: [{ required: true }],
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export const valoresFields = [
  {
    name: "PAGNUM",
    title: "Número de pago",
    type: "number",
    readonly: true,
  },
  {
    name: "REMNUM",
    title: "Remito",
    type: "number",
    rules: [{ required: true }],
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];
