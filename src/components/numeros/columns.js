import { Link } from "react-router-dom";
const columns = () => [
  {
    title: "Descripción",
    dataIndex: "NUMDES",
    render: (text, record) => (
      <Link to={`/ultimos-numeros/${record.ID}`}>
        {text || "*** sin nombre ***"}
      </Link>
    ),
    searchable: true,
  },
  {
    title: "Número",
    dataIndex: "NUMVAL",
    align: "center",
  },
];
export default columns;
