import { Link } from "react-router-dom";
import { sortColumn } from "../../utils/helpers";

const columns = [
  {
    title: "Nombre",
    dataIndex: "TRANOM",
    sorter: (a, b) => sortColumn(a, b, "TRANOM"),
    render: (text, record) => (
      <Link to={`/transportes/${record.ID}`}>
        {text || "*** sin nombre ***"}
      </Link>
    ),
    searchable: true,
  },
  {
    title: "Domicilio",
    dataIndex: "TRADOM",
    searchable: true,
  },
  {
    title: "Localidad",
    dataIndex: "TRALOC",
    searchable: true,
  },
  {
    title: "Teléfono",
    dataIndex: "TRATEL",
    searchable: true,
  },
];

export default columns;
