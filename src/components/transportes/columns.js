import { Link } from "react-router-dom";
import { sortColumn, statuses } from "../../utils/helpers";

const columns = () => {
  const status = statuses
    .map((status) => ({
      text: status.text,
      value: status.text,
    }))
    .sort((a, b) => sortColumn(a, b, "text"));

  return [
    {
      title: "Código",
      dataIndex: "TRACOD",
      searchable: true,
    },
    {
      title: "Nombre",
      dataIndex: "TRANOM",
      sorter: (a, b) => sortColumn(a, b, "TRANOM"),
      render: (text, record) => (
        <Link to={`/transportes/${record.ID}`}>
          {text || "*** sin nombre ***"}
        </Link>
      ),
      searchable: true,
    },
    {
      title: "Domicilio",
      dataIndex: "TRADOM",
      searchable: true,
    },
    {
      title: "Localidad",
      dataIndex: "TRALOC",
      searchable: true,
    },
    {
      title: "Teléfono",
      dataIndex: "TRATEL",
      searchable: true,
    },
    {
      dataIndex: "TRAEST",
      title: "Estado",
      onFilter: (value, record) =>
        record.TRAEST.toLowerCase() === value.toLowerCase(),
      filters: status,
    },
  ];
};

export default columns;
