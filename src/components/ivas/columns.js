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
      dataIndex: "IVACOD",
      searchable: true,
      width: 80,
      render: (text, record) => <Link to={`/ivas/${record.ID}`}>{text}</Link>,
    },
    {
      title: "Nombre",
      dataIndex: "IVADES",
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "IVAEST",
      title: "Estado",
      onFilter: (value, record) =>
        record.IVAEST.toLowerCase() === value.toLowerCase(),
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
