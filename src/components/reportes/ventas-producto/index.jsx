import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { Table as AntdTable, Typography, Space } from 'antd'
import Header from 'components/common/Header'
import Table from 'components/common/Table'
import Alert from 'components/common/Alert'
import EditForm from 'components/common/EditForm'
import ProductDetails from './ProductDetails'
import PrintButton from 'components/common/PrintButton'
import { getSalesByProduct } from 'redux/actions'
import { getSelectList } from 'utils/helpers'
import { fields } from './fields'
import { columns } from './columns'
import './product-details.scss'

const { Text } = Typography

const VentasProducto = (props) => {
  const dispatch = useDispatch()
  const productos = useSelector((state) => state.productos)
  const tipos = useSelector((state) => state.tipos)
  const subtipos = useSelector((state) => state.subtipos)
  const reports = useSelector((state) => state.reports)
  const { records: rems } = useSelector((state) => state.remitos)

  const { loading, salesByProduct, success, error } = reports
  const [formValues, setFormValues] = useState({})
  const [fieldsList, setFieldsList] = useState([])

  useEffect(() => {
    const allRems = rems
    const REMFEC_TO = allRems[0]?.REMFEC
    if (REMFEC_TO) {
      const lastDate = REMFEC_TO.split('-')
      lastDate[lastDate.length - 1] = '01'
      const REMFEC_FROM = lastDate.join('-')
      setFormValues((values) => ({ ...values, REMFEC_TO, REMFEC_FROM }))
    }

    const flds = fields()
    setFieldsList(flds)
  }, [rems])

  useEffect(() => {
    if (formValues?.PRODCOD) {
      dispatch(getSalesByProduct(formValues))
    }
  }, [formValues, dispatch])

  const handlePrint = (e) => {
    window.print()
  }

  const onFinish = (values) => setFormValues(values)

  const producto = productos.records.find(
    (p) => p.PRODCOD === formValues?.PRODCOD
  )

  const summary = (pageData) => {
    let totalQty = 0
    pageData.forEach((item) => (totalQty += parseFloat(item.REMCAN)))

    return (
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell align="right" colSpan={3}>
          Total
        </AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right">
          <Text type="primary">{totalQty}</Text>
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
    )
  }

  return (
    <Layout>
      <div className="sales-by-product">
        <Header title="Ventas por Producto" onBack={props.history.goBack} />

        {error && <Alert message="Error" description={error} type="error" />}
        <div className="producto-container">
          <div className="form-container">
            <EditForm
              fields={fieldsList}
              record={formValues}
              loading={loading}
              success={success}
              error={error}
              maximize={true}
              optionsModels={{
                productos: getSelectList('productos', productos.records)
              }}
              history={props.history}
              onFinish={onFinish}
              saveButtonText="Confirmar"
            />
          </div>
          <ProductDetails
            tipos={tipos}
            subtipos={subtipos}
            producto={producto}
          />
        </div>

        <Table
          loading={loading}
          columns={columns}
          dataSource={salesByProduct}
          rowKey="REMNUM"
          path={props.location.pathname}
          pagination={false}
          noSearch={true}
          summary={summary}
        />
      </div>
      <Space>
        <PrintButton onPrint={handlePrint} />
      </Space>
    </Layout>
  )
}

export default VentasProducto
