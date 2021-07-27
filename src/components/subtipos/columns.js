import { Tag } from "antd";
import { Link } from "react-router-dom";
import { sortColumn, statuses } from "utils/helpers";

export const columns = (props) => {
  const tipos = (
    props.tipos &&
    props.tipos.map((tipo) => ({
      text: tipo.TIPCOD,
      value: tipo.TIPCOD,
    }))
  ).sort((a, b) => sortColumn(a, b, "text"));
  const status = statuses
    .map((status) => ({
      text: status.text,
      value: status.text,
    }))
    .sort((a, b) => sortColumn(a, b, "text"));

  return [
    {
      title: "Subtipo",
      dataIndex: "SUBTIPCOD",
      sorter: (a, b) => sortColumn(a, b, "SUBTIPCOD"),
      searchable: true,
      width: 100,
      align: "center",
      render: (text, record) => (
        <Link to={`/subtipos/${record.ID}`}>{text}</Link>
      ),
    },
    {
      title: "Descripción",
      dataIndex: "SUBTIPDES",
      sorter: (a, b) => sortColumn(a, b, "SUBTIPDES"),
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      title: "Tipo",
      dataIndex: "TIPCOD",
      sorter: (a, b) => sortColumn(a, b, "TIPCOD"),
      onFilter: (value, record) => record.TIPCOD === value,
      filters: tipos,
      searchable: true,
      width: 100,
      align: "center",
    },
    {
      title: "Descripción",
      dataIndex: "TIPDES",
      sorter: (a, b) => sortColumn(a, b, "TIPDES"),
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "SUBTIPEST",
      title: "Estado",
      onFilter: (value, record) =>
        record.SUBTIPEST.toLowerCase() === value.toLowerCase(),
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
