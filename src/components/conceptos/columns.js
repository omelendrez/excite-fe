import { formatNumber, formatDate } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "CONNUM",
    title: "Número",
  },
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
      <div>{formatNumber(record.CONCANHAB - record.CONCANDEB)}</div>
    ),
  },
];
