import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "PRODCOD",
    title: "Código",
    sorter: (a, b) => sortColumn(a, b, "PRODCOD"),
  },
  {
    dataIndex: "PRODDES",
    title: "Descripción",
    sorter: (a, b) => sortColumn(a, b, "PRODDES"),
  },
  {
    dataIndex: "TIPDES",
    title: "Tipo",
    sorter: (a, b) => sortColumn(a, b, "TIPDES"),
  },
  {
    dataIndex: "SUBTIPDES",
    title: "Subtipo",
    sorter: (a, b) => sortColumn(a, b, "SUBTIPDES"),
  },
  {
    dataIndex: "PRODPRE",
    title: "Precio",
  },
];
