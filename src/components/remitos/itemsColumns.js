import { Space } from "antd";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";
import { formatAmount } from "../../utils/helpers";

const itemsColumns = (props) => {
  return [
    {
      dataIndex: "PRODDES",
      title: "Producto",
      searchable: true,
      width: 300,
    },
    {
      dataIndex: "REMCAN",
      title: "Cantidad",
      width: 100,
    },
    {
      dataIndex: "REMPRE",
      title: "Precio",
      render: (text, record) => formatAmount(text),
      align: "right",
      width: 120,
    },
    {
      dataIndex: "REMTOT",
      title: "Total",
      render: (text, record) => formatAmount(record.REMCAN * record.REMPRE),
      align: "right",
      width: 120,
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

export default itemsColumns;
