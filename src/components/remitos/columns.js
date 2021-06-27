import { Link } from "react-router-dom";
import { sortColumn, formatDate, formatAmount } from "utils/helpers";

export const columns = [
  {
    dataIndex: "REMNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "REMNUM"),
    render: (text, record) => <Link to={`/remitos/${record.ID}`}>{text}</Link>,
    searchable: true,
    width: 100,
  },
  {
    dataIndex: "REMFEC",
    title: "Fecha",
    render: (text) => formatDate(text),
    width: 120,
    align: "center",
  },
  {
    dataIndex: "ESTDES",
    title: "Estado",
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, "ESTDES"),
    width: 200,
  },
  {
    dataIndex: "CLINOM",
    title: "Cliente",
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
    ellipsis: true,
    width: 220,
  },
  {
    dataIndex: "VENNOM",
    title: "Vendedor",
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, "VENNOM"),
    ellipsis: true,
    width: 220,
  },
  {
    dataIndex: "REMQTY",
    title: "Items",
    align: "right",
  },
  {
    dataIndex: "REMTOT",
    title: "Total",
    render: (text, record) => formatAmount(text),
    align: "right",
  },
];

export default columns;
