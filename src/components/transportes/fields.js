const fields = [
  {
    name: "TRACOD",
    title: "Código",
    type: "text",
    width: 100,
    readonly: true,
  },
  {
    name: "TRANOM",
    title: "Nombre",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "TRADOM",
    title: "Domicilio",
    type: "text",
    required: true,
  },
  {
    name: "TRALOC",
    title: "Localidad",
    type: "text",
  },
  {
    name: "TRAPROCOD",
    title: "Provincia",
    type: "select",
    options: "provincias",
    rules: [{ required: true }],
  },
  {
    name: "TRATEL",
    title: "Teléfono",
    type: "text",
  },
  {
    name: "TRACUIT",
    title: "CUIT",
    type: "text",
    width: 200,
  },
  {
    name: "TRAOBS",
    title: "Obs.",
    type: "textarea",
    rows: 4,
  },
  {
    name: "TRAEST",
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
