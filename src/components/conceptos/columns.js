import { Link } from "react-router-dom";
import { formatAmount, formatDate, sortColumn } from "utils/helpers";

const columns = () => [
  {
    dataIndex: "CONNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "CONNUM"),
    render: (text, record) => (
      <Link to={`/conceptos/${record.ID}`}>{text}</Link>
    ),
    searchable: true,
    width: 100,
  },
  {
    dataIndex: "CONFEC",
    title: "Fecha",
    render: (text) => formatDate(text),
    width: 120,
    align: "center",
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
