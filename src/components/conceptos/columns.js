import { formatAmount, formatDate } from "../../utils/helpers";

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
    dataIndex: "CLINOM",
    title: "Cliente",
    searchable: true,
  },
  {
    dataIndex: "CONDES",
    title: "Concepto",
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
