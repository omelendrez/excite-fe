import { Link } from "react-router-dom";
import { sortColumn } from "../../utils/helpers";

export const columns = [
  {
    title: "Nombre",
    dataIndex: "TRANOM",
    sorter: (a, b) => sortColumn(a, b, "TRANOM"),
    render: (text, record) => (
      <Link to={`/transportes/${record.ID}`}>{text}</Link>
    ),
    searchable: true,
  },
  {
    title: "Domicilio",
    dataIndex: "TRADOM",
  },
  {
    title: "Localidad",
    dataIndex: "TRALOC",
  },
  {
    title: "Teléfono",
    dataIndex: "TRATEL",
  },
];
