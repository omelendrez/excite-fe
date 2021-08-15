import { Space } from "antd";
import EditButton from "components/common/EditButton";
import DeleteButton from "components/common/DeleteButton";
import { Link } from "react-router-dom";
import { sortColumn, formatDate, formatAmount } from "utils/helpers";

export const columns = [
  {
    title: "Número",
    dataIndex: "PAGNUM",
    searchable: true,
    width: 90,
    align: "center",
    render: (text, record) => <Link to={`/pagos/${record.ID}`}>{text}</Link>,
  },
  {
    title: "Fecha",
    dataIndex: "PAGFEC",
    render: (text) => formatDate(text),
    width: 110,
    align: "center",
  },
  {
    dataIndex: "CLICOD",
    title: "Código",
    searchable: true,
    width: 80,
  },
  {
    title: "Cliente",
    dataIndex: "CLINOM",
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
    searchable: true,
    ellipsis: true,
    width: 180,
  },
  {
    title: "Total",
    dataIndex: "TOTAL",
    render: (text) => formatAmount(text),
    sorter: (a, b) => sortColumn(a, b, "TOTAL"),
    align: "right",
  },
];

export const remitosColumns = (props) => {
  return [
    {
      dataIndex: "REMNUM",
      title: "Número",
      searchable: true,
      width: 90,
    },
    {
      title: "Fecha",
      dataIndex: "REMFEC",
      render: (text) => formatDate(text),
      width: 100,
    },
    {
      dataIndex: "ESTDES",
      title: "Estado",
      width: 100,
      ellipsis: true,
    },
    {
      title: "Importe",
      dataIndex: "REMTOT",
      render: (text) => formatAmount(text),
      width: 100,
      align: "right",
    },
    {
      title: "Descuento",
      dataIndex: "REMDES",
      render: (text) => formatAmount(text),
      width: 100,
      align: "right",
    },
    {
      title: "Neto",
      dataIndex: "REMNET",
      render: (_, record) => formatAmount(record.REMTOT - record.REMDES),
      width: 100,
      align: "right",
    },
    {
      dataIndex: "actions",
      render: (text, record) => (
        <Space>
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
      dataIndex: "PAGSEC",
      title: "#",
      width: 80,
    },
    {
      dataIndex: "PAGIMP",
      title: "Importe",
      render: (text) => formatAmount(text),
      width: 110,
      align: "right",
    },
    {
      dataIndex: "PAGTIP",
      title: "Tipo de pago",
      searchable: true,
      width: 110,
    },
    {
      title: "Fecha",
      dataIndex: "PAGFEC",
      render: (text) => formatDate(text),
      width: 110,
      align: "center",
    },
    {
      dataIndex: "PAGCHEBAN",
      title: "Banco",
      searchable: true,
      width: 110,
    },
    {
      dataIndex: "PAGCHENUM",
      title: "Cheque #",
      searchable: true,
      width: 110,
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

export const pendingRemitosColumns = (props) => {
  return [
    {
      dataIndex: "REMNUM",
      title: "Presupuesto",
      width: 90,
      key: "REMNUM",
    },
    {
      title: "Fecha",
      dataIndex: "REMFEC",
      render: (text) => formatDate(text),
      width: 110,
      key: "REMFEC",
    },
    {
      title: "Importe",
      dataIndex: "REMTOT",
      render: (text) => formatAmount(text),
      width: 110,
      align: "right",
      key: "REMTOT",
    },
    {
      title: "Descuento",
      dataIndex: "REMDES",
      render: (text) => formatAmount(text),
      width: 110,
      align: "right",
      key: "REMDES",
    },
  ];
};
