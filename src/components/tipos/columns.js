import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Tipo",
    dataIndex: "TIPCOD",
    key: "TIPCOD",
    align: "center",
    sorter: (a, b) => sortColumn(a, b, "TIPCOD"),
  },
  {
    title: "Descripción",
    dataIndex: "TIPDES",
    key: "TIPDES",
    sorter: (a, b) => sortColumn(a, b, "TIPDES"),
  },
];
