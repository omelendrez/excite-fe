import { Link } from "react-router-dom";
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
    render: (text, record) => (
      <Link to={`/trasnportes/${record.ID}`}>{text}</Link>
    ),
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
