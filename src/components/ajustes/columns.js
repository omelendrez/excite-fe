import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "AJUNUM",
    title: "Número",
    disablePadding: true,
    sorter: (a, b) => sortColumn(a, b, "AJUNUM"),
  },
  {
    dataIndex: "AJUFEC",
    title: "Fecha",
  },
  {
    dataIndex: "PRODCOD",
    title: "Código",
    sorter: (a, b) => sortColumn(a, b, "PRODCOD"),
  },
  {
    dataIndex: "PRODDES",
    title: "Producto",
  },
  {
    dataIndex: "AJUCAN",
    title: "Ajuste",
    align: "right",
  },
];
