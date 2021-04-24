import { Tag } from "antd";
import { Link } from "react-router-dom";
import { sortColumn } from "../../utils/helpers";

const columns = [
  {
    title: "Código",
    dataIndex: "IVACOD",
    sorter: (a, b) => sortColumn(a, b, "IVACOD"),
    searchable: true,
  },
  {
    title: "Nombre",
    dataIndex: "IVADES",
    sorter: (a, b) => sortColumn(a, b, "IVADES"),
    render: (text, record) => (
      <Link to={`/ivas/${record.ID}`}>{text || "*** sin nombre ***"}</Link>
    ),
    searchable: true,
  },
  {
    title: "Estado",
    dataIndex: "IVAEST",
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
