const fields = [
  {
    name: "REMNUM",
    title: "Número de remito",
    type: "number",
    readonly: true,
  },
  {
    name: "REMFEC",
    title: "Fecha",
    type: "date",
    rules: [{ required: true }],
  },
  {
    name: "VENCOD",
    title: "Vendedor",
    type: "select",
    options: "vendedores",
  },
  {
    name: "REMFACNUM",
    title: "Factura",
    type: "number",
    readonly: true,
  },
  {
    name: "REMFACLET",
    title: "Tipo factura",
    type: "text",
    readonly: true,
  },
  {
    name: "CLICOD",
    title: "Cliente",
    type: "select",
    options: "clientes",
  },
  {
    name: "ESTCOD",
    title: "Estado",
    type: "select",
    options: "estados",
  },
  {
    name: "REMPAGNUM",
    title: "Número de pago",
    type: "number",
    readonly: true,
  },
  {
    name: "REMDES",
    title: "Descuento",
    type: "amount",
    readonly: true,
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export default fields;
