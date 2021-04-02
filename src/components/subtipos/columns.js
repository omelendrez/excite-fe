import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Tipo",
    dataIndex: "TIPCOD",
    sorter: (a, b) => sortColumn(a, b, "TIPCOD"),
  },
  {
    title: "Subtipo",
    dataIndex: "SUBTIPCOD",
    sorter: (a, b) => sortColumn(a, b, "SUBTIPCOD"),
  },
  {
    title: "Descripción",
    dataIndex: "SUBTIPDES",
    sorter: (a, b) => sortColumn(a, b, "SUBTIPDES"),
  },
];
