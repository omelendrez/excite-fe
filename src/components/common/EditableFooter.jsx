import React from 'react'
import { formatAmount } from 'utils/helpers'

const EditableFooter = (props) => {
  const { data, discount } = props

  const totalAmount = formatAmount(
    data?.length
      ? data.reduce(
          (tot, cur) => tot + cur.REMCAN * parseFloat(cur.REMPRE),
          -discount
        )
      : ''
  )

  return (
    <>
      {!!discount && (
        <tr>
          <td align="right" colSpan={4}>
            Descuento
          </td>
          <td align="right">{formatAmount(discount)}</td>
        </tr>
      )}
      <tr>
        <td align="right" colSpan={4}>
          Total
        </td>
        <td align="right">{totalAmount}</td>
      </tr>
    </>
  )
}

export default EditableFooter
