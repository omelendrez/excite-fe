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
  },
  {
    title: "Localidad",
    dataIndex: "VENLOC",
  },
  {
    title: "Teléfono",
    dataIndex: "VENTEL",
  },
];
