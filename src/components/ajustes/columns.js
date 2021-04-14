import { Link } from "react-router-dom";
import { sortColumn, formatDate } from "../../utils/helpers";

const columns = () => [
  {
    dataIndex: "AJUNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "AJUNUM"),
    render: (text, record) => <Link to={`/ajustes/${record.ID}`}>{text}</Link>,
    searchable: true,
  },
  {
    dataIndex: "AJUFEC",
    title: "Fecha",
    render: (text) => formatDate(text),
  },
  {
    dataIndex: "PRODDES",
    title: "Producto",
    render: (text, record) => `${record.PRODCOD} - ${record.PRODDES}`,
    searchable: true,
  },
  {
    dataIndex: "AJUCAN",
    title: "Cantidad",
    align: "right",
  },
];

export default columns;
