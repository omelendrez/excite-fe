import React from 'react'
import { Layout } from 'antd'
import Header from 'components/common/Header'
import EditableTable from 'components/common/EditableTable'
import Alert from 'components/common/Alert'
import { itemFields } from './fields'
import { itemColumns } from './columns'

const Items = (props) => {
  const { loading, items, error, discount, onSave } = props

  const columns = itemColumns()

  const tableProps = {
    loading,
    data: items,
    fields: itemFields,
    rowKey: 'ID',
    columns,
    discount,
    onSave
  }

  return (
    <Layout>
      <Header />
      {error && <Alert message="Error" description={error} type="error" />}
      <EditableTable {...tableProps} />
    </Layout>
  )
}

export default Items
