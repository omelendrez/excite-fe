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
    dataIndex: "TIPCOD",
    title: "Tipo",
  },
  {
    dataIndex: "TIPDES",
    title: "Desc. Tipo",
  },
  {
    dataIndex: "SUBTIPCOD",
    title: "Subtipo",
  },
  {
    dataIndex: "SUBTIPDES",
    title: "Desc. Subtipo",
  },
  {
    dataIndex: "PRODPRE",
    title: "Precio",

    align: "right",
  },
  {
    dataIndex: "PRODSEX",
    title: "Sexo",
  },
  {
    dataIndex: "PRODSTO",
    title: "Stock",
  },
];
