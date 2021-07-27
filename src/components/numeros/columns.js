import { Link } from "react-router-dom";
const columns = () => [
  {
    title: "ID",
    dataIndex: "ID",
    width: 50,
    align: "center",
    render: (text, record) => (
      <Link to={`/ultimos-numeros/${record.ID}`}>{text}</Link>
    ),
  },
  {
    title: "Descripción",
    dataIndex: "NUMDES",
    searchable: true,
    ellipsis: true,
    width: 180,
  },
  {
    title: "Número",
    dataIndex: "NUMVAL",
  },
];
export default columns;
