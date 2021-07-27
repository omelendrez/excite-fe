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
      title: "Código",
      dataIndex: "TRACOD",
      searchable: true,
      width: 80,
      render: (text, record) => (
        <Link to={`/transportes/${record.ID}`}>{text}</Link>
      ),
    },
    {
      title: "Nombre",
      dataIndex: "TRANOM",
      sorter: (a, b) => sortColumn(a, b, "TRANOM"),
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      title: "Domicilio",
      dataIndex: "TRADOM",
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      title: "Localidad",
      dataIndex: "TRALOC",
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      title: "Teléfono",
      dataIndex: "TRATEL",
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "TRAEST",
      title: "Estado",
      onFilter: (value, record) =>
        record.TRAEST.toLowerCase() === value.toLowerCase(),
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
