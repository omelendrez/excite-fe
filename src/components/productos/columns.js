import { Tag } from "antd";
import { Link } from "react-router-dom";
import { sortColumn, formatAmount, statuses } from "utils/helpers";

const columns = (props) => {
  const tipos = (
    props.tipos &&
    props.tipos.map((tipo) => ({
      text: tipo.TIPCOD,
      value: tipo.TIPCOD,
    }))
  ).sort((a, b) => sortColumn(a, b, "text"));
  const subtipos = (
    props.subtipos &&
    props.subtipos.map((subtipo) => ({
      text: subtipo.SUBTIPCOD,
      value: subtipo.SUBTIPCOD,
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
      dataIndex: "PRODCOD",
      title: "Código",
      searchable: true,
      width: 100,
      render: (text, record) => (
        <Link to={`/productos/${record.ID}`}>{text}</Link>
      ),
    },
    {
      dataIndex: "PRODDES",
      title: "Descripción",
      sorter: (a, b) => sortColumn(a, b, "PRODDES"),
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "TIPDES",
      title: "Tipo",
      render: (value, record) => `${record.TIPCOD} - ${record.TIPDES}`,
      sorter: (a, b) => sortColumn(a, b, "TIPDES"),
      onFilter: (value, record) => record.TIPCOD === value,
      filters: tipos,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "SUBTIPDES",
      title: "Subtipo",
      render: (value, record) => `${record.SUBTIPCOD} - ${record.SUBTIPDES}`,
      sorter: (a, b) => sortColumn(a, b, "SUBTIPDES"),
      onFilter: (value, record) => record.SUBTIPCOD === value,
      filters: subtipos,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "PRODSTO",
      title: "Stock",
      width: 120,
    },
    {
      dataIndex: "PRODPRE",
      title: "Precio",
      render: (value) => formatAmount(value),
      width: 120,
    },
    {
      dataIndex: "PRODEST",
      title: "Estado",
      onFilter: (value, record) =>
        record.PRODEST.toLowerCase() === value.toLowerCase(),
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
