import { Tag } from "antd";
import { Link } from "react-router-dom";
import { sortColumn, statuses } from "../../utils/helpers";

export const columns = () => {
  const status = statuses
    .map((status) => ({
      text: status.text,
      value: status.text,
    }))
    .sort((a, b) => sortColumn(a, b, "text"));

  return [
    {
      dataIndex: "CLICOD",
      title: "Código",
      searchable: true,
      width: 80,
    },
    {
      dataIndex: "CLINOM",
      title: "Cliente",
      sorter: (a, b) => sortColumn(a, b, "CLINOM"),
      render: (text, record) => (
        <Link to={`/clientes/${record.ID}`}>
          {text || "*** sin nombre ***"}
        </Link>
      ),
      searchable: true,
    },
    {
      dataIndex: "CLIDOM",
      title: "Domicilio",
      searchable: true,
    },
    {
      dataIndex: "CLILOC",
      title: "Localidad",
      searchable: true,
    },
    {
      dataIndex: "CLITEL",
      title: "Teléfono",
      searchable: true,
    },
    {
      dataIndex: "CLIEST",
      title: "Estado",
      onFilter: (value, record) =>
        record.CLIEST.toLowerCase() === value.toLowerCase(),
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
