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
  },
  {
    dataIndex: "CLINOM",
    title: "Nombre",
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
