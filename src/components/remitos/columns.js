import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "REMNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "REMNUM"),
  },
  {
    dataIndex: "REMFEC",
    title: "Fecha",
  },
  {
    dataIndex: "ESTDES",
    title: "Estado",
  },
  {
    dataIndex: "VENCOD",
    title: "Cód. Ven.",
  },
  {
    dataIndex: "VENNOM",
    title: "Vendedor",
  },
  {
    dataIndex: "CLICOD",
    title: "Cód. Cli.",
  },
  {
    dataIndex: "CLINOM",
    title: "Cliente",
  },
  {
    dataIndex: "REMFACNUM",
    title: "Factura Nro.",
  },
  {
    dataIndex: "REMPAGNUM",
    title: "Pago Nro.",
  },
  {
    dataIndex: "REMDES",
    title: "Descuento",
  },
];
