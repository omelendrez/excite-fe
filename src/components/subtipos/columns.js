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
    title: "Subtipo",
    dataIndex: "SUBTIPCOD",
    key: "SUBTIPCOD",
    sorter: (a, b) => sortColumn(a, b, "SUBTIPCOD"),
  },
  {
    title: "Descripción",
    dataIndex: "SUBTIPDES",
    key: "SUBTIPDES",
    sorter: (a, b) => sortColumn(a, b, "SUBTIPDES"),
  },
];
