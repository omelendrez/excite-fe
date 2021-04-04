import { sortColumn, formatDate } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "AJUNUM",
    title: "Número",
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
