import React, { useState, useEffect, useCallback } from 'react'
import { formatAmount } from 'utils/helpers'

const getIndex = (event) => {
  const form = event.target.form
  return [Array.prototype.indexOf.call(form, event.target), form]
}

const EditableRow = (props) => {
  const { row, onSave } = props
  const [formState, setFormState] = useState(row)

  const keyDownHandler = useCallback((event) => {
    if (event.target.nodeName === 'INPUT') {
      if (event.keyCode === 13) {
        event.preventDefault()
        const [index, form] = getIndex(event)
        form.elements[index + 1]?.focus()
        if (
          event.target.id === 'REMPRE' &&
          parseInt(event.target.dataset?.rowid) === row.ID
        ) {
          console.log(row, formState)
          if (
            parseInt(row.PRODCOD) !== parseInt(formState.PRODCOD) ||
            parseInt(row.REMCAN) !== parseInt(formState.REMCAN) ||
            parseFloat(row.REMPRE) !== parseFloat(formState.REMPRE)
          ) {
            onSave(formState)
          }
        }
      }
    }
  })

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => document.removeEventListener('keydown', keyDownHandler)
  }, [keyDownHandler])

  const handleChange = (e) =>
    setFormState((data) => ({ ...data, [e.target.id]: e.target.value }))
  const handleFocus = (event) => event.target.select()

  const totalRow = formatAmount(formState.REMCAN * formState.REMPRE)

  return (
    <tr key={row.ID}>
      <td className="editable">
        <input
          type="text"
          id="PRODCOD"
          onFocus={handleFocus}
          value={formState.PRODCOD}
          onChange={handleChange}
        />
      </td>
      <td>{formState.PRODDES}</td>
      <td className="editable">
        <input
          type="text"
          id="REMCAN"
          onFocus={handleFocus}
          value={formState.REMCAN}
          onChange={handleChange}
        />
      </td>
      <td className="editable">
        <input
          type="text"
          id="REMPRE"
          onFocus={handleFocus}
          value={formState.REMPRE}
          onChange={handleChange}
          data-rowid={row.ID}
        />
      </td>
      <td className="right">{totalRow}</td>
    </tr>
  )
}

export default EditableRow
