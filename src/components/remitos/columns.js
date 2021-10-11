import { Link } from 'react-router-dom'
import { sortColumn, formatDate, formatAmount } from 'utils/helpers'
export const columns = [
  {
    dataIndex: 'REMNUM',
    title: 'Número',
    searchable: true,
    width: 80,
    render: (text, record) => (
      <Link to={`/remitos/${record.REMNUM}`}>{text}</Link>
    )
  },
  {
    dataIndex: 'REMFEC',
    title: 'Fecha',
    render: (text) => formatDate(text),
    width: 120,
    align: 'center'
  },
  {
    dataIndex: 'ESTDES',
    title: 'Estado',
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, 'ESTDES'),
    ellipsis: true,
    width: 120
  },
  {
    dataIndex: 'CLICOD',
    title: 'Código',
    searchable: true,
    width: 80
  },
  {
    dataIndex: 'CLINOM',
    title: 'Cliente',
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, 'CLINOM'),
    ellipsis: true,
    width: 280
  },
  {
    dataIndex: 'VENCOD',
    title: 'Código',
    searchable: true,
    width: 80
  },
  {
    dataIndex: 'VENNOM',
    title: 'Vendedor',
    searchable: true,
    sorter: (a, b) => sortColumn(a, b, 'VENNOM'),
    ellipsis: true,
    width: 180
  },
  {
    dataIndex: 'REMQTY',
    title: 'Items',
    align: 'center',
    width: 60,
    ellipsis: true
  },
  {
    dataIndex: 'REMTOT',
    title: 'Total',
    render: (text) => formatAmount(text),
    align: 'right',
    width: 100,
    ellipsis: true
  },
  {
    dataIndex: 'REMDES',
    title: 'Descuento',
    render: (text) => formatAmount(text),
    align: 'right',
    width: 100,
    ellipsis: true
  },
  {
    title: 'Neto',
    render: (_, record) => (
      <span style={{ color: '#002766', fontWeight: 'bold' }}>
        {formatAmount(record.REMTOT - record.REMDES)}
      </span>
    ),
    align: 'right',
    width: 100,
    ellipsis: true
  }
]

export const itemColumns = (props) => {
  const {
    save,
    edit,
    handleDelete,
    handleModal,
    isEditing,
    cancel,
    editingKey,
    prodcodValidator
  } = props

  return [
    {
      dataIndex: 'PRODCOD',
      title: 'Código',
      editable: true,
      width: 60,
      handleModal,
      align: 'center',
      rules: [
        {
          required: true,
          message: 'Ingrese Producto'
        },
        {
          validator: prodcodValidator,
          message: 'Producto no existe'
        }
      ]
    },
    {
      dataIndex: 'PRODDES',
      title: 'Producto',
      hideOnEdit: true,
      ellipsis: true,
      width: 280
    },
    {
      dataIndex: 'REMCAN',
      title: 'Cantidad',
      inputType: 'number',
      editable: true,
      align: 'center',
      width: 160,
      min: 1,
      rules: [
        {
          required: true,
          message: 'Ingrese Cantidad'
        },
        {
          min: 1,
          type: 'number',
          message: 'Cantidad no puede ser 0'
        }
      ]
    },
    {
      dataIndex: 'REMPRE',
      title: 'Precio',
      inputType: 'amount',
      editable: true,
      align: 'right',
      width: 160,
      rules: [
        {
          required: true,
          message: 'Ingrese Precio'
        }
        // {
        //   min: 1,
        //   type: "number",
        //   message: "Precio no puede ser 0",
        // },
      ]
    },
    {
      dataIndex: 'REMTOT',
      title: 'Total',
      render: (_, record) => formatAmount(record.REMCAN * record.REMPRE),
      align: 'right',
      width: 120
    }
  ]
}
