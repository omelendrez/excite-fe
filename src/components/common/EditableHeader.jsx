import React from 'react'

const EditableHeader = (props) => (
  <tr className="editable-header">
    {props.columns.map((c, index) => (
      <th width={c.width} align={c.align} key={index}>
        {c.title}
      </th>
    ))}
  </tr>
)

export default EditableHeader
