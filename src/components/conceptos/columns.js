import { formatAmount, formatDate } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "CONFEC",
    title: "Fecha",
    render: (text) => formatDate(text),
  },
  {
    dataIndex: "CONDES",
    title: "Descripción",
    searchable: true,
  },
  {
    dataIndex: "CLINOM",
    title: "Nombre",
    searchable: true,
  },
  {
    title: "Importe",
    key: "balance",
    align: "right",
    render: (text, record) => (
      <div>{formatAmount(record.CONCANHAB - record.CONCANDEB)}</div>
    ),
  },
];
