import { formatDate } from "../../utils/helpers";
export const columns = [
  {
    title: "Fecha",
    dataIndex: "IVAFEC",
    key: "IVAFEC",
    render: (text) => formatDate(text),
  },
  {
    title: "Porcentaje",
    dataIndex: "IVAPOR",
  },
];
