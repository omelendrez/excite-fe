import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Header from 'components/common/Header'
import Table from 'components/common/Table'
import Alert from 'components/common/Alert'
import EditForm from 'components/common/EditForm'
import ProductDetails from './ProductDetails'
import { getSalesByProduct } from 'redux/actions'
import { getSelectList } from 'utils/helpers'
import { fields } from './fields'
import { columns } from './columns'
import './product-details.scss'

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
