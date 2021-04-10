import { Link } from "react-router-dom";
import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "CLINOM",
    title: "Cliente",
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
    render: (text, record) => (
      <Link to={`/clientes/${record.ID}`}>{text || "*** sin nombre ***"}</Link>
    ),
    searchable: true,
  },
  {
    dataIndex: "VENNOM",
    title: "Vendedor",
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
  {
    dataIndex: "CLIEST",
    title: "Estado",
  },
];
