import { Link } from "react-router-dom";
import { sortColumn } from "../../utils/helpers";

const columns = [
  {
    title: "Nombre",
    dataIndex: "VENNOM",
    sorter: (a, b) => sortColumn(a, b, "VENNOM"),
    searchable: true,
    render: (text, record) => (
      <Link to={`/vendedores/${record.ID}`}>
        {text || "*** sin nombre ***"}
      </Link>
    ),
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

export default columns;
