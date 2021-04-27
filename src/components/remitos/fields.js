const fields = [
  {
    name: "REMNUM",
    title: "Número de remito",
    type: "text",
    rules: [{ required: true }],
  },
  {
    name: "REMFEC",
    title: "Fecha",
    type: "date",
    rules: [{ required: true }],
  },
  {
    name: "ESTCOD",
    title: "Estado",
    type: "select",
    options: "estados",
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
  },
  {
    name: "REMFACLET",
    title: "Tipo factura",
    type: "text",
  },
  {
    name: "CLICOD",
    title: "Cliente",
    type: "select",
    options: "clientes",
  },
  {
    name: "REMPAGNUM",
    title: "Número de pago",
    type: "number",
  },
  {
    name: "REMDES",
    title: "Descuento",
    type: "amount",
  },
  {
    name: "ID",
    type: "number",
    hidden: true,
  },
];

export default fields;
