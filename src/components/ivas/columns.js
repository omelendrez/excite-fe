import { sortColumn } from "../../utils/helpers";
import { Link } from "react-router-dom";

export const columns = [
  {
    title: "Código",
    dataIndex: "IVACOD",
    sorter: (a, b) => sortColumn(a, b, "IVACOD"),
  },
  {
    title: "Nombre",
    dataIndex: "IVADES",
    sorter: (a, b) => sortColumn(a, b, "IVADES"),
    render: (text, record) => (
      <Link to={`/ivas/${record.ID}`}>{text || "*** sin nombre ***"}</Link>
    ),
  },
  {
    title: "Estado",
    dataIndex: "IVAEST",
  },
];
