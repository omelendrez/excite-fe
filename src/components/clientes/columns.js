import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "CLINOM",
    title: "Nombre",
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
    searchable: true,
  },
  {
    dataIndex: "CLIDOM",
    title: "Domicilio",
    searchable: true,
  },
  {
    dataIndex: "CLILOC",
    title: "Localidad",
    searchable: true,
  },
  {
    dataIndex: "CLITEL",
    title: "Teléfono",
    searchable: true,
  },
];
