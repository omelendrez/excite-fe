import React from 'react'
import { Menu, Dropdown, Button } from 'antd'
import { PrinterOutlined } from '@ant-design/icons'

const DropdownButton = (props) => {
  const { onPrint } = props
  const menu = (
    <Menu onClick={onPrint}>
      <Menu.Item key="1">Detallado</Menu.Item>
      <Menu.Item key="2">Resumido</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <Button shape="round" icon={<PrinterOutlined />}>
        Imprimir
      </Button>
    </Dropdown>
  )
}

export default DropdownButton
