import { formatDate, formatAmount } from "utils/helpers";

export const columns = (props) => {
  return [
    {
      dataIndex: "CLICOD",
      title: "Cliente",
      width: 80,
    },
    {
      dataIndex: "CLINOM",
      title: "Nombre",
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "VENCOD",
      title: "Vendedor",
      width: 80,
      onFilter: (value, record) => record.VENCOD === value,
      filters: props.filter,
    },
    {
      dataIndex: "VENNOM",
      title: "Nombre",
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "CLILOC",
      title: "Localidad",
      ellipsis: true,
      width: 120,
    },
    {
      dataIndex: "REMNUM",
      title: "Presup.",
      width: 80,
    },
    {
      dataIndex: "REMFEC",
      title: "Fecha",
      render: (text) => formatDate(text),
      width: 120,
      align: "center",
    },
    {
      dataIndex: "REMCACNUM",
      title: "Factura",
      render: (text) => (!!text ? text : ""),
      ellipsis: true,
      width: 120,
    },
    {
      dataIndex: "TOTAL",
      title: "Imp. a Pagar",
      align: "right",
      width: 100,
      render: (text) => <span className="debt">{formatAmount(text)}</span>,
      ellipsis: true,
    },
    {
      dataIndex: "DAYS",
      title: "Atraso",
      render: (text) => <strong>{text}</strong>,
    },
  ];
};
