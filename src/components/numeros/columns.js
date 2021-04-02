import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Código",
    dataIndex: "NUMCOD",
    key: "NUMCOD",
    sorter: (a, b) => sortColumn(a, b, "NUMCOD"),
  },
  {
    title: "Descripción",
    dataIndex: "NUMDES",
    key: "NUMDES",
  },
  {
    title: "Valor",
    dataIndex: "NUMVAL",
    key: "NUMVAL",
    align: "center",
  },
  {
    title: "Pv",
    dataIndex: "NUMPV",
    key: "NUMPV",
  },
];
