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
      dataIndex: "VENCOD",
      searchable: true,
      width: 80,
      render: (text, record) => (
        <Link to={`/vendedores/${record.ID}`}>{text}</Link>
      ),
    },
    {
      title: "Nombre",
      dataIndex: "VENNOM",
      sorter: (a, b) => sortColumn(a, b, "VENNOM"),
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      title: "Domicilio",
      dataIndex: "VENDOM",
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      title: "Localidad",
      dataIndex: "VENLOC",
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      title: "Teléfono",
      dataIndex: "VENTEL",
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "VENEST",
      title: "Estado",
      onFilter: (value, record) =>
        record.VENEST.toLowerCase() === value.toLowerCase(),
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
