import React from 'react'
import { Button, Popconfirm } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons'

const DeleteButton = (props) => {
  return (
    <Popconfirm
      title="Está seguro que desear eliminar este registro?"
      okText="Si"
      cancelText="No"
      onConfirm={props.handleDelete}
    >
      <Button icon={<DeleteTwoTone />} danger shape="round">
        {!props.noLabel && 'Eliminar'}
      </Button>
    </Popconfirm>
  )
}

export default DeleteButton
