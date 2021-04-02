import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Código",
    dataIndex: "VENCOD",
    key: "VENCOD",
    align: "center",
    sorter: (a, b) => sortColumn(a, b, "VENCOD"),
  },
  {
    title: "Nombre",
    dataIndex: "VENNOM",
    key: "VENNOM",
    sorter: (a, b) => sortColumn(a, b, "VENNOM"),
  },
  {
    title: "Domicilio",
    dataIndex: "VENDOM",
    key: "VENDOM",
  },
  {
    title: "Teléfono",
    dataIndex: "VENTEL",
    key: "VENTEL",
  },
];
