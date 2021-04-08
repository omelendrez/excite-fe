import { formatAmount, formatDate, sortColumn } from "../../utils/helpers";

export const columns = [
  {
    dataIndex: "CONNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "AJUNUM"),
    searchable: true,
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
