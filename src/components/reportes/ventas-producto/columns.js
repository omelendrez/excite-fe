import { sortColumn, formatDate } from 'utils/helpers'

export const columns = [
  {
    dataIndex: 'REMFEC',
    title: 'Fecha',
    render: (text) => formatDate(text),
    width: 120,
    align: 'center'
  },
  {
    dataIndex: 'REMNUM',
    title: 'Documento',
    width: 160,
    render: (text, record) => `Presup.Nro ${record.REMNUM}`
  },
  {
    dataIndex: 'CLINOM',
    title: 'Cliente',
    sorter: (a, b) => sortColumn(a, b, 'CLINOM'),
    ellipsis: true,
    width: 280
  },
  {
    dataIndex: 'REMCAN',
    title: 'Cantidad',
    width: 80,
    align: 'right'
  }
]
