import { formatDate } from "../../utils/helpers";
export const columns = [
  {
    title: "Fecha",
    dataIndex: "IVAFEC",
    key: "IVAFEC",
    render: (text) => formatDate(text),
    width: 120,
  },
  {
    title: "Porcentaje",
    dataIndex: "IVAPOR",
  },
];
