const fields = [
  {
    name: "ID",
    type: "ID",
  },
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
  },
  {
    name: "TRATEL",
    title: "Teléfono",
    type: "text",
  },
  {
    name: "TRAOBS",
    title: "Observaciones",
    type: "textarea",
    rows: 2,
  },
  {
    name: "TRACUIT",
    title: "CUIT",
    type: "text",
    width: 200,
  },
];

export default fields;
