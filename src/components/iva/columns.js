import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Código",
    dataIndex: "IVACOD",
    sorter: (a, b) => sortColumn(a, b, "IVACOD"),
  },
  {
    title: "Nombre",
    dataIndex: "IVADES",
    sorter: (a, b) => sortColumn(a, b, "IVADES"),
  },
];
