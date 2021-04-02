import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "CONNUM",
    title: "Número",
    align: "center",
    sorter: (a, b) => sortColumn(a, b, "CONNUM"),
  },
  {
    dataIndex: "CONFEC",
    title: "Fecha",
    sorter: (a, b) => sortColumn(a, b, "CONFEC"),
  },
  {
    dataIndex: "CONDES",
    title: "Descripción",
  },
  {
    dataIndex: "CONCLI",
    title: "Cliente",
    align: "right",
    sorter: (a, b) => sortColumn(a, b, "CONCLI"),
  },
  {
    dataIndex: "CLINOM",
    title: "Nombre",
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
  },
  {
    dataIndex: "CONCANDEB",
    title: "Débito",
    align: "right",
  },
  {
    dataIndex: "CONCANHAB",
    title: "Crédito",
    align: "right",
  },
];
