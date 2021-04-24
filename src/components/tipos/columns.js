import { Tag } from "antd";
import { Link } from "react-router-dom";
import { sortColumn } from "../../utils/helpers";

const columns = () => [
  {
    title: "Tipo",
    dataIndex: "TIPCOD",
    sorter: (a, b) => sortColumn(a, b, "TIPCOD"),
  },
  {
    title: "Descripción",
    dataIndex: "TIPDES",
    sorter: (a, b) => sortColumn(a, b, "TIPDES"),
    searchable: true,
    render: (text, record) =>
      record.SUBTIPOS > 0 ? (
        <Link to={`/tipos/${record.ID}`}>{text || "*** sin nombre ***"}</Link>
      ) : (
        text
      ),
  },
  {
    title: "Subtipos",
    dataIndex: "SUBTIPOS",
  },
  {
    dataIndex: "TIPEST",
    title: "Estado",
    render: (text) => {
      let color = "green";
      if (text !== "Activo") {
        color = "red";
      }
      return (
        <span>
          <Tag color={color} key={text}>
            {text.toUpperCase()}
          </Tag>
        </span>
      );
    },
  },
];

export default columns;
