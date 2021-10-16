import React, { useEffect, useState } from 'react'
import { Layout, Space } from 'antd'
import Alert from 'components/common/Alert'
import { useSelector, useDispatch } from 'react-redux'
import Header from 'components/common/Header'
import EditForm from 'components/common/EditForm'
import PrintButton from 'components/common/PrintButton'
import { getSalesByProduct } from 'redux/actions'

import { fields } from './fields'

const VentasSubtipo = (props) => {
  const dispatch = useDispatch()
  const reports = useSelector((state) => state.reports)
  const { loading, salesByProduct, success, error } = reports

  const [formValues, setFormValues] = useState({})
  const [fieldsList, setFieldsList] = useState([])

  useEffect(() => {
    const flds = fields()
    setFieldsList(flds)
  }, [salesByProduct])

  useEffect(() => {
    if (formValues?.PRODCOD) {
      dispatch(getSalesByProduct(formValues))
    }
  }, [formValues, dispatch])

  const handlePrint = (e) => {
    window.print()
  }

  const onFinish = (values) => setFormValues(values)

  return (
    <Layout>
      <div className="sales-by-product">
        <Header title="Ventas por Subtipo" onBack={props.history.goBack} />

        {error && <Alert message="Error" description={error} type="error" />}
        <div className="subtipo-container">
          <div className="form-container">
            <EditForm
              fields={fieldsList}
              record={formValues}
              loading={loading}
              success={success}
              error={error}
              maximize={true}
              history={props.history}
              onFinish={onFinish}
              saveButtonText="Confirmar"
            />
          </div>
        </div>
      </div>
      <Space>
        <PrintButton onPrint={handlePrint} />
      </Space>
    </Layout>
  )
}

export default VentasSubtipo
