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
    dataIndex: "CONCLI",
    title: "Código",
    searchable: true,
    width: 80,
  },
  {
    dataIndex: "CLINOM",
    title: "Cliente",
    searchable: true,
    ellipsis: true,
    width: 180,
  },
  {
    dataIndex: "CONDES",
    title: "Concepto",
    searchable: true,
    ellipsis: true,
    width: 180,
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
