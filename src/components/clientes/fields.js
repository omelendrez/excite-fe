export const fields = [
  {
    name: "CLICOD",
    title: "Código",
    type: "number",
  },
  {
    name: "VENCOD",
    title: "Vendedor",
    type: "select",
    options: "vendedores",
    rules: [{ required: true }],
  },
  {
    name: "CLINOM",
    title: "Nombre",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "CLIFAN",
    title: "N. fantasía",
    type: "text",
  },
  {
    name: "CLIDOM",
    title: "Domicilio",
    type: "text",
  },
  {
    name: "CLILOC",
    title: "Localidad",
    type: "text",
  },
  {
    name: "PROCOD",
    title: "Provincia",
    type: "select",
    options: "provincias",
    rules: [{ required: true }],
  },
  {
    name: "CLICP",
    title: "Código Postal",
    type: "text",
  },
  {
    name: "CLIINT",
    title: "Interior",
    type: "select",
    options: "interior",
    rules: [{ required: true }],
  },
  {
    name: "CLITEL",
    title: "Teléfono",
    type: "text",
  },
  {
    name: "CLICEL",
    title: "Celular",
    type: "text",
  },
  {
    name: "IVACOD",
    title: "IVA",
    type: "select",
    options: "ivas",
    rules: [{ required: true }],
  },
  {
    name: "CLICUIT",
    title: "Cuit",
    type: "text",
  },
  {
    name: "TRACOD",
    title: "Transporte",
    type: "select",
    options: "transportes",
  },
  {
    name: "CLIEST",
    title: "Estado",
    type: "select",
    options: "statuses",
  },

  {
    name: "CLIFP",
    type: "text",
    hidden: true,
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
  {
    name: "CLISALFEC",
    type: "date",
    hidden: true,
  },
  {
    name: "CLISALDEB",
    type: "amount",
    hidden: true,
  },
  {
    name: "CLISALHAB",
    type: "amount",
    hidden: true,
  },
  {
    name: "CLISALIMP",
    type: "amount",
    hidden: true,
  },
];

export const tipoFields = [
  {
    name: "TIPCOD",
    title: "Tipo",
    type: "select",
    options: "tipos",
    rules: [{ required: true }],
    allowAdd: true,
  },
  {
    name: "CLIPRODPRE",
    title: "Precio",
    type: "amount",
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];
