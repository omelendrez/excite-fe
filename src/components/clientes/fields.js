const fields = [
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
    options: "estados",
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
];

export default fields;
