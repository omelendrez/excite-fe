import { Link } from "react-router-dom";
import { sortColumn, formatDate } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "REMNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "REMNUM"),
    render: (text, record) => <Link to={`/remitos/${record.ID}`}>{text}</Link>,
    searchable: true,
  },
  {
    dataIndex: "REMFEC",
    title: "Fecha",
    render: (text) => formatDate(text),
  },
  {
    dataIndex: "ESTDES",
    title: "Estado",
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, "ESTDES"),
  },
  {
    dataIndex: "VENNOM",
    title: "Vendedor",
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, "VENNOM"),
  },
  {
    dataIndex: "CLINOM",
    title: "Cliente",
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
  },
];
