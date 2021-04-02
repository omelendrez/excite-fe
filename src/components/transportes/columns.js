import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Código",
    dataIndex: "TRACOD",
    sorter: (a, b) => sortColumn(a, b, "TRACOD"),
  },
  {
    title: "Nombre",
    dataIndex: "TRANOM",
    sorter: (a, b) => sortColumn(a, b, "TRANOM"),
  },
  {
    title: "Domicilio",
    dataIndex: "TRADOM",
  },
  {
    title: "Teléfono",
    dataIndex: "TRATEL",
  },
];
