import React from 'react'
import { Layout } from 'antd'
import { useDispatch } from 'react-redux'
import Header from 'components/common/Header'
import EditableTable from 'components/common/EditableTable'
import Alert from 'components/common/Alert'
import { deleteItem } from 'redux/actions'
import { itemFields } from './fields'
import { itemColumns } from './columns'

const Remitos = (props) => {
  const dispatch = useDispatch()
  const { loading, items, error, discount } = props

  const handleDelete = (record) => dispatch(deleteItem(record))

  const columns = itemColumns({
    save: () => {},
    edit: () => {},
    handleDelete: () => {},
    handleModal: () => {},
    cancel: () => {},
    editingKey: null,
    prodcodValidator: () => {}
  })

  const data = items.map((i) => ({
    ...i,
    REMTOT: i.REMCAN * i.REMPRE
  }))

  const tableProps = {
    loading,
    data,
    fields: itemFields,
    rowKey: 'ID',
    columns,
    discount,
    handleDelete
  }

  return (
    <Layout>
      <Header />
      {error && <Alert message="Error" description={error} type="error" />}
      <EditableTable {...tableProps} />
    </Layout>
  )
}

export default Remitos
