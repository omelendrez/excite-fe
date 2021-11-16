import React from 'react'
import { Layout } from 'antd'
import { formatDate, formatAmount } from 'utils/helpers'
import './Invoice.css'

const Invoice = props => {
  const { record, items, columns, client, seller, iva } = props
  const headers = [
    {
      label: 'Presup.',
      value: record.REMNUM
    },
    {
      label: 'Fecha',
      value: formatDate(record.REMFEC)
    },
    {
      label: 'Vendedor',
      value: `${seller.VENCOD} - ${seller.VENNOM}`
    },
    {
      label: 'Cliente',
      value: `${client.CLICOD} - ${client.CLINOM}`
    },
    {
      label: 'Domicilio',
      value: client.CLIDOM
    },
    {
      label: 'Localidad',
      value: client.CLILOC
    },
    {
      label: 'I.V.A.',
      value: iva.IVADES
    },
  ]

  const totalAmount = items.reduce(
    (acc, cur) => acc + cur.REMCAN * cur.REMPRE,
    0
  )

  return (
    <Layout className="container">
      <div className="invoice-header">
        {headers.map((header, index) =>
          <div className="invoice-row" key={index}>
            <div className="field-name">{header.label}</div>
            <div className="field-value">{header.value}</div>
          </div>
        )}
      </div>
      <table>
        <thead>
          <tr>
            {columns.map(col =>
              (<th key={col.dataIndex} width={col.width} align={col.align}>{col.title}</th>)
            )}
          </tr>
        </thead>
        <tbody>
          {items.map((row) =>
          (<tr key={row.ID}>
            {columns.map(col =>
            (<td key={col.dataIndex} width={col.width} align={col.align}>
              {col.render ? col.render(row[col.dataIndex], row) : row[col.dataIndex]}</td>)
            )}
          </tr>)
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              Total:
            </td>
            <td className="bold">
              {formatAmount(totalAmount)}
            </td>
          </tr>
        </tfoot>
      </table>
    </Layout>
  )
}

export default Invoice


