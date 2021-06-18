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
    width: 110,
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
    sorter: (a, b) => sortColumn(a, b, "TOTAL"),
    align: "right",
  },
];

export const remitosColumns = (props) => {
  return [
    {
      dataIndex: "REMNUM",
      title: "Remito",
      searchable: true,
      width: 90,
    },
    {
      title: "Importe",
      dataIndex: "REMTOT",
      render: (text) => formatAmount(text),
      width: 110,
      align: "right",
    },
    {
      title: "Descuento",
      dataIndex: "REMDES",
      render: (text) => formatAmount(text),
      width: 110,
      align: "right",
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
      width: 200,
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
      title: "Remito",
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
