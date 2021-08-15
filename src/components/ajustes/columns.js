import { Link } from "react-router-dom";
import { sortColumn, formatDate } from "utils/helpers";

const columns = () => [
  {
    dataIndex: "AJUNUM",
    title: "Número",
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
    dataIndex: "PRODCOD",
    title: "Código",
    searchable: true,
    width: 80,
  },
  {
    dataIndex: "PRODDES",
    title: "Producto",
    searchable: true,
    ellipsis: true,
    width: 180,
  },
  {
    dataIndex: "AJUCAN",
    title: "Cantidad",
  },
];

export default columns;
