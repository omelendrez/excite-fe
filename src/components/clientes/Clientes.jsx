import React, { useState } from 'react'
import { Layout, Space } from 'antd'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Header from 'components/common/Header'
import Table from 'components/common/Table'
import Alert from 'components/common/Alert'
import PaymentsButton from 'components/common/PaymentsButton'
import ConceptsButton from 'components/common/ConceptsButton'
import { createNewRecord } from 'utils/helpers'
import { fields } from './fields'
import { columns } from './columns'

const Clientes = (props) => {
  const clientes = useSelector((state) => state.clientes)
  const [url, setUrl] = useState('')
  const { loading, records, error } = clientes

  const onAdd = () => {
    setUrl(`/clientes/add/cliente`)
  }

  /*
  const onPrint = () => {
    console.log('Printing...')
  }
  */

  const handlePayments = () => {
    setUrl('/pagos')
  }

  const handleConcepts = () => {
    setUrl('/conceptos')
  }

  const tableProps = {
    loading,
    columns: columns(),
    dataSource: records,
    rowKey: 'CLICOD',
    onAdd,
    // onPrint,
    path: props.location.pathname
  }

  if (!!url) {
    const record = createNewRecord(fields)
    return (
      <Redirect
        push
        to={{
          pathname: url,
          state: {
            record
          }
        }}
      />
    )
  }

  return (
    <Layout>
      <Header title="Clientes" onBack={props.history.goBack} />

      {error && <Alert message="Error" description={error} type="error" />}

      <Table {...tableProps} />

      <Space>
        <PaymentsButton handlePayments={handlePayments} />
        <ConceptsButton handleConcepts={handleConcepts} />
      </Space>
    </Layout>
  )
}

export default Clientes
