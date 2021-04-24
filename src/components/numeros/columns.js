import { Link } from "react-router-dom";
const columns = () => [
  {
    title: "ID",
    dataIndex: "ID",
    width: 50,
    align: "center",
  },
  {
    title: "Descripción",
    dataIndex: "NUMDES",
    render: (text, record) => (
      <Link to={`/ultimos-numeros/${record.ID}`}>
        {text || "*** sin nombre ***"}
      </Link>
    ),
    searchable: true,
    width: 200,
  },
  {
    title: "Número",
    dataIndex: "NUMVAL",
  },
];
export default columns;
