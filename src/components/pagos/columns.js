import { Space } from "antd";
import EditButton from "components/common/EditButton";
import DeleteButton from "components/common/DeleteButton";
import { Link } from "react-router-dom";
import { sortColumn, formatDate, formatAmount } from "utils/helpers";

export const columns = [
  {
    title: "Número",
    dataIndex: "PAGNUM",
    sorter: (a, b) => sortColumn(a, b, "PAGNUM"),
    searchable: true,
    width: 90,
    align: "center",
    render: (text, record) => <Link to={`/pagos/${record.ID}`}>{text}</Link>,
  },
  {
    title: "Fecha",
    dataIndex: "PAGFEC",
    render: (text) => formatDate(text),
    width: 120,
    align: "center",
  },
  {
    title: "Cliente",
    dataIndex: "CLINOM",
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
    searchable: true,
    width: 300,
  },
  {
    title: "Total",
    dataIndex: "TOTAL",
    render: (text) => formatAmount(text),
    align: "right",
  },
];

export const remitosColumns = (props) => {
  return [
    {
      dataIndex: "PAGNUM",
      title: "Pago",
      searchable: true,
      width: 120,
    },
    {
      dataIndex: "REMNUM",
      title: "Remito",
      width: 120,
    },
    {
      dataIndex: "actions",
      render: (text, record) => (
        <Space>
          <EditButton
            handleEdit={() => props.handleEdit && props.handleEdit(record)}
          />
          <DeleteButton
            handleDelete={() =>
              props.handleDelete && props.handleDelete(record)
            }
          />
        </Space>
      ),
    },
  ];
};

export const valoresColumns = (props) => {
  return [
    {
      dataIndex: "PAGNUM",
      title: "Pago",
      searchable: true,
      width: 120,
    },
    {
      dataIndex: "PAGSEC",
      title: "#",
      width: 80,
    },
    {
      dataIndex: "PAGIMP",
      title: "Importe",
      render: (text) => formatAmount(text),
      width: 120,
    },
    {
      dataIndex: "PAGTIP",
      title: "Tipo de pago",
      width: 120,
    },
    {
      dataIndex: "PAGCHEBAN",
      title: "Banco",
      width: 260,
    },
    {
      dataIndex: "PAGCHENUM",
      title: "Nro. de cheque",
      width: 200,
    },
    {
      dataIndex: "actions",
      render: (text, record) => (
        <Space>
          <EditButton
            handleEdit={() => props.handleEdit && props.handleEdit(record)}
          />
          <DeleteButton
            handleDelete={() =>
              props.handleDelete && props.handleDelete(record)
            }
          />
        </Space>
      ),
    },
  ];
};
