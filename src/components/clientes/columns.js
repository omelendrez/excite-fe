import { Tag, Space } from "antd";
import { Link } from "react-router-dom";
import EditButton from "components/common/EditButton";
import DeleteButton from "components/common/DeleteButton";
import { sortColumn, statuses, formatAmount } from "utils/helpers";
import { DollarCircleOutlined } from "@ant-design/icons";

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
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "CLITIP",
      title: "",
      render: (text) =>
        text > 0 ? (
          <Tag color="error">
            <DollarCircleOutlined />
          </Tag>
        ) : null,
      width: 40,
      align: "center",
    },
    {
      dataIndex: "CLIDOM",
      title: "Domicilio",
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "CLILOC",
      title: "Localidad",
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "CLITEL",
      title: "Teléfono",
      searchable: true,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "CLIEST",
      title: "Estado",
      align: "center",
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

export const tiposColumns = (props) => {
  return [
    {
      dataIndex: "TIPCOD",
      title: "Código",
      searchable: true,
      width: 80,
    },
    {
      dataIndex: "TIPDES",
      title: "Descripción",
      searchable: true,
      ellipsis: true,
      width: 300,
    },
    {
      dataIndex: "CLIPRODPRE",
      title: "Precio especial",
      align: "right",
      render: (text) => formatAmount(text),
    },
    {
      dataIndex: "actions",
      render: (text, record) => (
        <Space>
          <EditButton handleEdit={() => props.handleEdit(record)} />
          <DeleteButton handleDelete={() => props.handleDelete(record)} />
        </Space>
      ),
    },
  ];
};
