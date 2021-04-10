const fields = [
  {
    name: "VENCOD",
    title: "Código",
    type: "text",
    width: 100,
    readonly: true,
  },
  {
    name: "VENNOM",
    title: "Nombre",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "VENDOM",
    title: "Domicilio",
    type: "text",
  },
  {
    name: "VENLOC",
    title: "Localidad",
    type: "text",
  },
  {
    name: "VENTEL",
    title: "Teléfono",
    type: "text",
  },
  {
    name: "VENCEL",
    title: "Celular",
    type: "text",
  },
  {
    name: "VENOBS",
    title: "Observaciones",
    type: "textarea",
    rows: 2,
  },
  {
    name: "VENCP",
    title: "Código postal",
    type: "text",
    width: 200,
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export default fields;
