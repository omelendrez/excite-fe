import { sortColumn } from "../../utils/helpers";
import { Link } from "react-router-dom"

 const columns = () =>[
  {
    title: "Tipo",
    dataIndex: "TIPCOD",
    sorter: (a, b) => sortColumn(a, b, "TIPCOD"),
  },
  {
    title: "Descripción",
    dataIndex: "TIPDES",
    sorter: (a, b) => sortColumn(a, b, "TIPDES"),
    searchable: true,
    render: (text, record) => (
      <Link to={`/tipos/${record.ID}`}>
        {text || "*** sin nombre ***"}
      </Link>
    ),
  },
  {
    dataIndex: "TIPEST",
    title: "Estado",
  },
];

export default columns