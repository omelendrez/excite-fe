import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Código",
    dataIndex: "TRACOD",
    key: "TRACOD",
    align: "center",
    sorter: (a, b) => sortColumn(a, b, "TRACOD"),
  },
  {
    title: "Nombre",
    dataIndex: "TRANOM",
    key: "TRANOM",
    sorter: (a, b) => sortColumn(a, b, "TRANOM"),
  },
  {
    title: "Domicilio",
    dataIndex: "TRADOM",
    key: "TRADOM",
  },
  {
    title: "Teléfono",
    dataIndex: "TRATEL",
    key: "TRATEL",
  },
];
