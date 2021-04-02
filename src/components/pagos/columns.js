import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Número",
    dataIndex: "PAGNUM",
    sorter: (a, b) => sortColumn(a, b, "PAGNUM"),
  },
  {
    title: "Fecha",
    dataIndex: "PAGFEC",
  },
  {
    title: "Código",
    dataIndex: "CLICOD",
    sorter: (a, b) => sortColumn(a, b, "CLICOD"),
  },
  {
    title: "Cliente",
    dataIndex: "CLINOM",
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
  },
  {
    title: "Total",
    dataIndex: "TOTAL",
  },
];
