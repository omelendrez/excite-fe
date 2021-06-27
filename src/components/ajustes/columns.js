import { Link } from "react-router-dom";
import { sortColumn, formatDate } from "utils/helpers";

const columns = () => [
  {
    dataIndex: "AJUNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "AJUNUM"),
    render: (text, record) => <Link to={`/ajustes/${record.ID}`}>{text}</Link>,
    searchable: true,
    width: 100,
    align: "center",
  },
  {
    dataIndex: "AJUFEC",
    title: "Fecha",
    render: (text) => formatDate(text),
    width: 120,
    align: "center",
  },
  {
    dataIndex: "PRODDES",
    title: "Producto",
    render: (text, record) => `${record.PRODCOD} - ${record.PRODDES}`,
    searchable: true,
    ellipsis: true,
    width: 220,
  },
  {
    dataIndex: "AJUCAN",
    title: "Cantidad",
  },
];

export default columns;
