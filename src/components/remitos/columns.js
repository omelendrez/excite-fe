import { sortColumn, formatDate } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "REMNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "REMNUM"),
  },
  {
    dataIndex: "REMFEC",
    title: "Fecha",
    render: (text) => formatDate(text),
  },
  {
    dataIndex: "ESTDES",
    title: "Estado",
  },
  {
    dataIndex: "VENNOM",
    title: "Vendedor",
  },
  {
    dataIndex: "CLINOM",
    title: "Cliente",
  },
];
