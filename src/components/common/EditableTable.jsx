import React, { useEffect, useState } from 'react'
import EditableHeader from './EditableHeader'
import EditableRow from './EditableRow'
import EditableFooter from './EditableFooter'

import './EditableTable.scss'

const EditableTable = (props) => {
  const { columns, data, discount, onSave } = props
  const [formData, setFormData] = useState([])
  const defaultRow = {
    ID: 0,
    PRODCOD: '',
    PRODDES: '',
    REMCAN: '',
    REMPRE: ''
  }

  useEffect(() => setFormData(data), [data])

  const handleFocus = (event) => event.target.select()

  return (
    <form className="editable-table">
      <table>
        <thead>
          <EditableHeader columns={columns} />
        </thead>
        <tbody>
          {formData.map((r) => (
            <EditableRow
              key={r.ID}
              row={r}
              onFocus={handleFocus}
              onSave={onSave}
            />
          ))}
          <EditableRow
            key={0}
            row={defaultRow}
            onFocus={handleFocus}
            onSave={onSave}
          />
        </tbody>
        <tfoot>
          <EditableFooter data={formData} discount={discount} />
        </tfoot>
      </table>
    </form>
  )
}

export default EditableTable
