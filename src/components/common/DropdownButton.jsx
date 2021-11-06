import React from 'react'
import { Menu, Dropdown, Button } from 'antd'

const DropdownButton = (props) => {
  const { label, options, onConfirm, icon } = props
  const menu = (
    <Menu onClick={onConfirm}>
      {options.map(option => <Menu.Item key={option.key}>{option.text}</Menu.Item>)}
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <Button shape="round" icon={icon}>
        {label}
      </Button>
    </Dropdown>
  )
}

export default DropdownButton
