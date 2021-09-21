import { Link } from "react-router-dom";
import { formatAmount, formatDate } from "utils/helpers";

const columns = () => [
  {
    dataIndex: "CONNUM",
    title: "Número",
    render: (text, record) => (
      <Link to={`/conceptos/${record.CONNUM}`}>{text}</Link>
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
    width: 280,
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
