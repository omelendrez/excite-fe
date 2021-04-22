import { Link } from "react-router-dom";
import { formatAmount, formatDate, sortColumn } from "../../utils/helpers";

const columns = () => [
  {
    dataIndex: "CONNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "CONNUM"),
    searchable: true,
  },
  {
    dataIndex: "CONFEC",
    title: "Fecha",
    render: (text) => formatDate(text),
  },
  {
    dataIndex: "CLINOM",
    title: "Cliente",
    searchable: true,
  },
  {
    dataIndex: "CONDES",
    title: "Concepto",
    searchable: true,
    render: (text, record) => (
      <Link to={`/conceptos/${record.ID}`}>{text || "*** sin nombre ***"}</Link>
    ),
  },
  {
    title: "Importe",
    key: "balance",
    align: "right",
    render: (text, record) => (
      <div>{formatAmount(record.CONCANHAB - record.CONCANDEB)}</div>
    ),
  },
];
export default columns;
