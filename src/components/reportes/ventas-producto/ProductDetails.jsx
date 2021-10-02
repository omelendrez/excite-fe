import React from 'react'

const ProductDetails = (props) => {
  const { tipos, subtipos, producto } = props

  return (
    <div className="details-container">
      {producto?.PRODCOD && (
        <>
          <div className="detail-row">
            <div className="detail-label">Código:</div>
            <div className="detail-value">{producto.PRODCOD}</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">Descr.:</div>
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
        </>
      )}
    </div>
  )
}

export default ProductDetails
