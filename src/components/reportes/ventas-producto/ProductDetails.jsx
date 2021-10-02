import React from 'react'
import { formatDate } from 'utils/helpers'

const ProductDetails = (props) => {
  const { tipos, subtipos, producto, formValues } = props

  const { REMFEC_FROM, REMFEC_TO } = formValues

  const period = `${formatDate(REMFEC_FROM)} al ${formatDate(REMFEC_TO)}`

  return (
    <div className="details-container">
      {producto?.PRODCOD && (
        <>
          <div className="detail-row">
            <div className="detail-label">Código:</div>
            <div className="detail-value">{producto.PRODCOD}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Descripción:</div>
            <div className="detail-value">{producto.PRODDES}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Tipo:</div>
            <div className="detail-value">
              {tipos.records.find((t) => t.TIPCOD === producto.TIPCOD).TIPDES}
            </div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Subtipo:</div>
            <div className="detail-value">
              {
                subtipos.records.find((t) => t.SUBTIPCOD === producto.SUBTIPCOD)
                  .SUBTIPDES
              }
            </div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Período:</div>
            <div className="detail-value">{period}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetails
