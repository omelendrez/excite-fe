import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "CLICOD",
    title: "Código",
    sorter: (a, b) => sortColumn(a, b, "CLICOD"),
  },
  {
    dataIndex: "CLINOM",
    title: "Nombre",
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
    searchable: true,
  },
  {
    dataIndex: "CLIDOM",
    title: "Domicilio",
  },
  {
    dataIndex: "CLILOC",
    title: "Localidad",
  },
];
