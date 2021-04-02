import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Tipo",
    dataIndex: "TIPCOD",
    sorter: (a, b) => sortColumn(a, b, "TIPCOD"),
  },
  {
    title: "Descripción",
    dataIndex: "TIPDES",
    sorter: (a, b) => sortColumn(a, b, "TIPDES"),
  },
];
