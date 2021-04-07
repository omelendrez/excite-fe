const fields = [
  {
    name: "ID",
    type: "ID",
  },
  {
    name: "VENCOD",
    title: "Código de vencimiento",
    type: "text",
    width: 100,
    readonly: true,
  },
  {
    name: "VENNOM",
    title: "Nombre de vencimiento",
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
    width: 400,
  },
  {
    name: "VENTEL",
    title: "Teléfono",
    type: "text",
    width: 200,
  },
  {
    name: "VENCEL",
    title: "Celular",
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
    name: "VENCP",
    title: "codigo postal",
    type: "text",
    width: 200,
  },
];

export default fields;
