import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Número",
    dataIndex: "PAGNUM",
    key: "PAGNUM",
    sorter: (a, b) => sortColumn(a, b, "PAGNUM"),
  },
  {
    title: "Fecha",
    dataIndex: "PAGFEC",
    key: "PAGFEC",
  },
  {
    title: "Código",
    dataIndex: "CLICOD",
    key: "CLICOD",
    sorter: (a, b) => sortColumn(a, b, "CLICOD"),
  },
  {
    title: "Cliente",
    dataIndex: "CLINOM",
    key: "CLINOM",
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
  },
  {
    title: "Total",
    dataIndex: "TOTAL",
    key: "TOTAL",
  },
];
