import { sortColumn, formatDate } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "AJUNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "AJUNUM"),
    searchable: true,
  },
  {
    dataIndex: "AJUFEC",
    title: "Fecha",
    render: (text) => formatDate(text),
  },
  {
    dataIndex: "PRODDES",
    title: "Producto",
    sorter: (a, b) => sortColumn(a, b, "PRODDES"),
    searchable: true,
  },
  {
    dataIndex: "AJUCAN",
    title: "Cantidad",
    align: "right",
  },
];
