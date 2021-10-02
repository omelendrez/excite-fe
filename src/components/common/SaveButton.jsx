import React from 'react'
import { Button } from 'antd'
import { SaveOutlined } from '@ant-design/icons'

const SaveButton = (props) => {
  const saveButtonText = props.saveButtonText || 'Guardar'
  return (
    <Button
      type="primary"
      icon={<SaveOutlined />}
      shape="round"
      htmlType="submit"
      disabled={props.disabled}
      loading={props.loading}
      onClick={props.onClick}
    >
      {saveButtonText}
    </Button>
  )
}

export default SaveButton
