import { Link } from "react-router-dom";
import { Popconfirm, Typography, Button } from "antd";
import { sortColumn, formatDate, formatAmount } from "utils/helpers";

export const columns = [
  {
    dataIndex: "REMNUM",
    title: "Número",
    sorter: (a, b) => sortColumn(a, b, "REMNUM"),
    render: (text, record) => <Link to={`/remitos/${record.ID}`}>{text}</Link>,
    searchable: true,
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
    dataIndex: "ESTDES",
    title: "Estado",
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, "ESTDES"),
    ellipsis: true,
    width: 120,
  },
  {
    dataIndex: "CLICOD",
    title: "Código",
    searchable: true,
    width: 80,
  },
  {
    dataIndex: "CLINOM",
    title: "Cliente",
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, "CLINOM"),
    ellipsis: true,
    width: 180,
  },
  {
    dataIndex: "VENCOD",
    title: "Código",
    searchable: true,
    width: 80,
  },
  {
    dataIndex: "VENNOM",
    title: "Vendedor",
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, "VENNOM"),
    ellipsis: true,
    width: 180,
  },
  {
    dataIndex: "REMQTY",
    title: "Items",
    align: "center",
    width: 60,
    ellipsis: true,
  },
  {
    dataIndex: "REMTOT",
    title: "Total",
    render: (text) => formatAmount(text),
    align: "right",
    width: 100,
    ellipsis: true,
  },
  {
    dataIndex: "REMDES",
    title: "Descuento",
    render: (text) => formatAmount(text),
    align: "right",
    width: 100,
    ellipsis: true,
  },
  {
    title: "Neto",
    render: (_, record) => (
      <span style={{ color: "#002766", fontWeight: "bold" }}>
        {formatAmount(record.REMTOT - record.REMDES)}
      </span>
    ),
    align: "right",
    width: 100,
    ellipsis: true,
  },
];

export const itemColumns = (props) => {
  const {
    save,
    edit,
    handleDelete,
    handleModal,
    isEditing,
    cancel,
    editingKey,
  } = props;
  return [
    {
      dataIndex: "PRODCOD",
      title: "Producto",
      editable: true,
      width: 100,
      handleModal,
    },
    {
      dataIndex: "PRODDES",
      title: "Descripción",
      hideOnEdit: true,
      ellipsis: true,
      width: 180,
    },
    {
      dataIndex: "REMCAN",
      title: "Cantidad",
      inputType: "number",
      editable: true,
      align: "center",
      width: 80,
    },
    {
      dataIndex: "REMPRE",
      title: "Precio",
      inputType: "amount",
      render: (text, _) => formatAmount(text),
      editable: true,
      align: "right",
      width: 120,
    },
    {
      dataIndex: "REMTOT",
      title: "Total",
      render: (_, record) => formatAmount(record.REMCAN * record.REMPRE),
      align: "right",
      width: 120,
    },
    {
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <input
              type="button"
              onClick={() => save(record.ID, record.REMNUM)}
              className="ant-btn-link"
              style={{
                marginRight: 8,
              }}
              value="Guardar"
            />
            <Popconfirm
              title={
                record.ID === 0
                  ? "Cancela agregar registro?"
                  : "Cancela modificación?"
              }
              onConfirm={cancel}
              okText="Si"
              cancelText="No"
            >
              <Button type="link">Cancelar</Button>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Modificar
            </Typography.Link>
            <Popconfirm
              title="Confirma eliminar registro?"
              onConfirm={() => handleDelete(record)}
              okText="Si"
              cancelText="No"
              okType="danger"
            >
              <Button type="link" disabled={editingKey !== ""}>
                Eliminar
              </Button>
            </Popconfirm>
          </span>
        );
      },
    },
  ];
};
