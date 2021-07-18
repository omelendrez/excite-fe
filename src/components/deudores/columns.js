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
      title: "Vend.",
      width: 80,
    },
    {
      dataIndex: "VENNOM",
      title: "Nombre",
      ellipsis: true,
      width: 180,
      onFilter: (value, record) => record.VENCOD === value,
      filters: props.filter,
      filterMultiple: false,
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
      align: "right",
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
      align: "center",
      render: (text) => (!!text ? text : ""),
      ellipsis: true,
      width: 80,
    },
    {
      dataIndex: "TOTAL",
      title: "Imp. a Pagar",
      align: "right",
      width: 120,
      render: (text) => <span className="debt">{formatAmount(text)}</span>,
    },
    {
      dataIndex: "ACCUM",
      title: "Saldo",
      align: "right",
      width: 120,
      render: (text) => <span className="debt">{formatAmount(text)}</span>,
    },
    {
      dataIndex: "DAYS",
      title: "Atraso",
      render: (text) => <strong>{text}</strong>,
    },
  ];
};
