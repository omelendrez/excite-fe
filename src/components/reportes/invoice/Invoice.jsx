import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BackButton from 'components/common/BackButton'
import PrintButton from 'components/common/PrintButton'
import { getFactura } from 'redux/actions/facturas'
import { formatDate, formatAmount, charPadding } from 'utils/helpers'
import './invoice.scss'

const Presupuesto = (props) => {
  const dispatch = useDispatch()
  const { record, items } = useSelector(state => state.facturas)

  useEffect(() => {
    dispatch(getFactura(props.match.params.id))
  }, [dispatch, props.match.params.id])

  const onBack = () => props.history.goBack()

  const onPrint = () => window.print()

  if (!record?.FACNUM) {
    return null
  }

  const invoice = `${charPadding(record.FACNUM.toString(), '0', 8)} EX`

  const total = items.reduce((acc, cur) => acc + parseFloat(cur.FACTOT), 0) - parseFloat(record.FACDES)

  return (
    <>
      <div className="invoice">
        <div className="invoice-number">{invoice}</div>
        <div className="date">{formatDate(record.FACFEC)}</div>
        <div className="client-name">{record.CLINOM}</div>
        <div className="client-cuit">{record.CLICUIT}</div>
        <div className="client-address">{record.CLIDOM}</div>
        <div className="client-phone">{record.CLITEL}</div>
        <div className="client-city">{record.CLILOC}</div>
        <div className="client-state">{record.PRONOM}</div>
        <div className="remito">{record.FACREMNUM}</div>
        <div className="client-resp">X</div>
        <div className="table">
          <table>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="table-row">
                  <td className="item-quantity">{item.FACCAN}</td>
                  <td className="item-code">{item.SUBTIPCOD}</td>
                  <td className="item-description">{item.SUBTIPDES}</td>
                  <td className="item-price">{formatAmount(item.FACPRE)}</td>
                  <td className="item-total">{formatAmount(item.FACTOT)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="subtotal1">{formatAmount(total)}</div>
        <div className="subtotal2">{formatAmount(total)}</div>
        <div className="subtotal3">{formatAmount(total)}</div>
        <div className="iva1">{formatAmount(0)}</div>
        <div className="iva2">{formatAmount(0)}</div>
        <div className="total">{formatAmount(total)}</div>
      </div>
      <BackButton onBack={onBack} />
      <PrintButton onPrint={onPrint} />
    </>
  )
}

export default Presupuesto
