import React, { useEffect, useState, } from 'react'
import { Layout, Space } from 'antd'
import Alert from 'components/common/Alert'
import { useSelector, useDispatch } from 'react-redux'
import Header from 'components/common/Header'
import EditForm from 'components/common/EditForm'
import PrintButton from 'components/common/PrintButton'
import { getSalesBySubtype } from 'redux/actions'

import './subtipos-details.scss'

import { fields } from './fields'

const VentasSubtipo = (props) => {
  const dispatch = useDispatch()

  const reports = useSelector((state) => state.reports)
  const { loading, salesBySubtype, success, error } = reports

  const [formValues, setFormValues] = useState({})
  const [fieldsList, setFieldsList] = useState([])

  useEffect(() => {
    const flds = fields()
    setFieldsList(flds)
  }, [])

  useEffect(() => {
    dispatch(getSalesBySubtype(formValues))
  }, [formValues, dispatch])

  const handlePrint = (e) => {
    e.preventDefault()
    window.print()
  }

  const onFinish = (values) => setFormValues(values)
  let subtipo = ''
  return (
    <Layout>
      <div className="sales-by-subtype">
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
          <Space>
            <PrintButton onPrint={handlePrint} />
          </Space>
        </div>

        <div className="subtipos-table">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Subtipo</th>
                <th colSpan={2}>Producto</th>
                <th align='right'>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {salesBySubtype.map((row, index) => {
                const printed = row.SUBTIPCOD === subtipo
                subtipo = row.SUBTIPCOD
                return (<tr key={index} className={`detail-row ${!printed ? 'first' : ''}`}>
                  <td>{printed ? '' : row.SUBTIPCOD}</td>
                  <td>{printed ? '' : ` - ${row.SUBTIPDES}`}</td>
                  <td>{row.PRODCOD}</td>
                  <td>{` - ${row.PRODDES}`}</td>
                  <td align='right'>{row.REMCAN}</td>
                </tr>)
              }
              )}
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  )
}

export default VentasSubtipo
