import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Header from 'components/common/Header'
import Table from 'components/common/Table'
import Alert from 'components/common/Alert'
import EditForm from 'components/common/EditForm'
import { getSalesByProduct } from 'redux/actions'
import { getSelectList } from 'utils/helpers'
import { fields } from './fields'
import { columns } from './columns'
import './product-details.scss'

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

const VentasProducto = (props) => {
  const dispatch = useDispatch()
  const productos = useSelector((state) => state.productos)
  const tipos = useSelector((state) => state.tipos)
  const subtipos = useSelector((state) => state.subtipos)
  const reports = useSelector((state) => state.reports)

  const { loading, salesByProduct, success, error } = reports
  const [productId, setProductId] = useState(null)
  const [fieldsList, setFieldsList] = useState([])

  useEffect(() => {
    if (productId) {
      dispatch(getSalesByProduct(productId))
    }
    const fieldsList = fields({
      handleSelectedValue
    })
    setFieldsList(fieldsList)
  }, [productId, dispatch])

  const handleSelectedValue = (value) => setProductId(value)

  const producto = productos.records.find((p) => p.PRODCOD === productId)

  return (
    <Layout>
      <Header title="Ventas por Producto" onBack={props.history.goBack} />

      {error && <Alert message="Error" description={error} type="error" />}
      <div className="producto-container">
        <EditForm
          fields={fieldsList}
          record={{ PRODCOD: productId }}
          loading={loading}
          success={success}
          error={error}
          maximize={true}
          optionsModels={{
            productos: getSelectList('productos', productos.records)
          }}
          history={props.history}
        />

        <ProductDetails tipos={tipos} subtipos={subtipos} producto={producto} />
      </div>

      <Table
        loading={loading}
        columns={columns}
        dataSource={salesByProduct}
        rowKey="REMNUM"
        path={props.location.pathname}
        noSearch={true}
      />
    </Layout>
  )
}

export default VentasProducto
