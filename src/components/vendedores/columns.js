import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Código",
    dataIndex: "VENCOD",
    sorter: (a, b) => sortColumn(a, b, "VENCOD"),
  },
  {
    title: "Nombre",
    dataIndex: "VENNOM",
    sorter: (a, b) => sortColumn(a, b, "VENNOM"),
    searchable: true,
  },
  {
    title: "Domicilio",
    dataIndex: "VENDOM",
  },
  {
    title: "Teléfono",
    dataIndex: "VENTEL",
  },
];
