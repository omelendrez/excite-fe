import { sortColumn } from "../../utils/helpers";
import { Link } from "react-router-dom"

const columns = (props) => {
  const tipos =
    (
      props.tipos &&
      props.tipos.map((tipo) => ({
        text: tipo.TIPCOD,
        value: tipo.TIPCOD,
      }))
    ).sort((a, b) => sortColumn(a, b, "text")) || [];

  return [
    {
      title: "Tipo",
      dataIndex: "TIPCOD",
      sorter: (a, b) => sortColumn(a, b, "TIPCOD"),
      onFilter: (value, record) => record.TIPCOD === value,
      filters: tipos,
    },
    {
      title: "Subtipo",
      dataIndex: "SUBTIPCOD",
      sorter: (a, b) => sortColumn(a, b, "SUBTIPCOD"),
    },
    {
      title: "Descripción",
      dataIndex: "SUBTIPDES",
      sorter: (a, b) => sortColumn(a, b, "SUBTIPDES"),
      render: (text, record) => (
        <Link to={`/subtipos/${record.ID}`}>
          {text || "*** sin nombre ***"}
        </Link>
      ),
    },
    {
      dataIndex: "SUBTIPEST",
      title: "Estado",
    },
  ];
};
export default columns;
