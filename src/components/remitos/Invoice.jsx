import React from 'react'

const Invoice = props => {
  const { record, items, fields, } = props
  console.log(fields)
  console.log(items)
  console.log(record)
  return (
    <div>My invoice</div>
  )
}

export default Invoice


