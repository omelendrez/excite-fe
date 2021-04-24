import { Tag } from "antd";
import { Link } from "react-router-dom";
import { sortColumn } from "../../utils/helpers";

export const columns = (props) => {
  const tipos = (
    props.tipos &&
    props.tipos.map((tipo) => ({
      text: tipo.TIPCOD,
      value: tipo.TIPCOD,
    }))
  ).sort((a, b) => sortColumn(a, b, "text"));

  return [
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
      title: "Subtipo",
      dataIndex: "SUBTIPCOD",
      sorter: (a, b) => sortColumn(a, b, "SUBTIPCOD"),
      searchable: true,
      width: 100,
      align: "center",
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
      searchable: true,
      width: 300,
    },
    {
      dataIndex: "SUBTIPEST",
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
};
export default columns;
