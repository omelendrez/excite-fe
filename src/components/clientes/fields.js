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
    width: 200,
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
    width: 200,
  },
  {
    name: "CLIINT",
    title: "Interior",
    type: "select",
    options: "interior",
    rules: [{ required: true }],
  },
  {
    name: "IVACOD",
    title: "IVA",
    type: "select",
    options: "iva",
    rules: [{ required: true }],
  },
  {
    name: "CLIFAN",
    title: "Nombre de fantasía",
    type: "text",
  },
];

export default fields;
