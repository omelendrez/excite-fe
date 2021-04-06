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
  },
  {
    name: "TRALOC",
    title: "Localidad",
    type: "text",
    width: 400,
  },
  {
    name: "TRATEL",
    title: "Teléfono",
    type: "text",
    width: 200,
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
