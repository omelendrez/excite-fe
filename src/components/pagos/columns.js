import { sortColumn, formatDate, formatAmount } from "utils/helpers";

export const columns = [
  {
    title: "Número",
    dataIndex: "PAGNUM",
    sorter: (a, b) => sortColumn(a, b, "PAGNUM"),
    searchable: true,
    width: 90,
    align: "center",
  },
  {
    title: "Fecha",
    dataIndex: "PAGFEC",
    render: (text) => formatDate(text),
    width: 120,
    align: "center",
  },
  {
    title: "Cliente",
    dataIndex: "CLINOM",
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
    searchable: true,
    width: 300,
  },
  {
    title: "Total",
    dataIndex: "TOTAL",
    render: (text) => formatAmount(text),
    align: "right",
  },
];
