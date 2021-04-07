const fields = [
  {
    name: "ID",
    type: "ID",
  },
  {
    name: "CLICOD",
    title: "Código",
    type: "text",
    width: 100,
    readonly: true,
  },
  {
    name: "CLINOM",
    title: "Nombre",
    type: "text",
    rules: [{ required: true }],
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
    name: "CLICUIT",
    title: "Cuit",
    type: "text",
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
    name: "CLICP",
    title: "Código Postal",
    type: "text",
  },
  {
    name: "CLIINT",
    title: "Interior",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "IVADES",
    title: "Descripción de IVA",
    type: "text",
  },
];

export default fields;
