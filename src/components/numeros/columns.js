import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Código",
    dataIndex: "NUMCOD",
    sorter: (a, b) => sortColumn(a, b, "NUMCOD"),
  },
  {
    title: "Descripción",
    dataIndex: "NUMDES",
  },
  {
    title: "Valor",
    dataIndex: "NUMVAL",
  },
];
