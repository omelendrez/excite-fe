import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "CLICOD",
    title: "Código",
    align: "center",
    sorter: (a, b) => sortColumn(a, b, "CLICOD"),
  },
  {
    dataIndex: "CLINOM",
    title: "Nombre",
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
  },
  {
    dataIndex: "CLIDOM",
    title: "Domicilio",
  },
  {
    dataIndex: "CLILOC",
    title: "Localidad",
  },
  {
    dataIndex: "CLICP",
    title: "C.P.",
  },
  {
    dataIndex: "CLITEL",
    title: "Teléfono",
  },
  {
    dataIndex: "CLICEL",
    title: "Celular",
  },
  {
    dataIndex: "CLICUIT",
    title: "CUIT",
  },
];
