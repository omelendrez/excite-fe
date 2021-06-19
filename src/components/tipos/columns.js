import { Tag } from "antd";
import { Link } from "react-router-dom";
import { sortColumn, statuses } from "utils/helpers";

const columns = () => {
  const status = statuses
    .map((status) => ({
      text: status.text,
      value: status.text,
    }))
    .sort((a, b) => sortColumn(a, b, "text"));

  return [
    {
      title: "Tipo",
      dataIndex: "TIPCOD",
      sorter: (a, b) => sortColumn(a, b, "TIPCOD"),
      width: 100,
      align: "center",
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
      width: 300,
    },
    {
      title: "Subtipos",
      dataIndex: "SUBTIPOS",
      align: "center",
      width: 90,
    },
    {
      dataIndex: "TIPEST",
      title: "Estado",
      onFilter: (value, record) =>
        record.TIPEST.toLowerCase() === value.toLowerCase(),
      filters: status,
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
};
export default columns;
