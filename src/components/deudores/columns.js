import { formatDate, formatAmount, sortColumn } from "utils/helpers";

export const columns = (props) => {
  console.log(props);
  const vendedores = (
    props.filter &&
    props.filter
      .filter((vendedor) => vendedor.VENEST === "Activo")
      .map((vendedor) => ({
        text: vendedor.VENNOM,
        value: vendedor.VENCOD,
      }))
  ).sort((a, b) => sortColumn(a, b, "text"));

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
      filters: vendedores,
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
      title: "Importe a Pagar",
      align: "right",
      width: 100,
      render: (text) => <span className="debt">{formatAmount(text * -1)}</span>,
      ellipsis: true,
    },
    {
      dataIndex: "DAYS",
      title: "Atraso",
      width: 100,
      render: (text) => <strong>{text}</strong>,
    },
  ];
};
