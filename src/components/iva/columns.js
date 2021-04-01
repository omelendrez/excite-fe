import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Código",
    dataIndex: "IVACOD",
    key: "IVACOD",
    sorter: (a, b) => sortColumn(a, b, "IVACOD"),
  },
  {
    title: "Nombre",
    dataIndex: "IVADES",
    key: "IVADES",
    sorter: (a, b) => sortColumn(a, b, "IVADES"),
  },
];
