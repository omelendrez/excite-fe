import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Nombre",
    dataIndex: "VENNOM",
    sorter: (a, b) => sortColumn(a, b, "VENNOM"),
    searchable: true,
  },
  {
    title: "Domicilio",
    dataIndex: "VENDOM",
    searchable: true,
  },
  {
    title: "Localidad",
    dataIndex: "VENLOC",
    searchable: true,
  },
  {
    title: "Teléfono",
    dataIndex: "VENTEL",
    searchable: true,
  },
];
