import React, { useState, useEffect, useCallback } from 'react'
import { message } from 'antd'
import { useSelector } from 'react-redux'
import { formatAmount } from 'utils/helpers'

const NOT_FOUND = ''

const setFocus = (event, step) => {
  event.preventDefault()
  const form = event.target.form
  const index = Array.prototype.indexOf.call(form, event.target)
  // Stop left arrow on first col 
  // Stop right arrow on last col
  if (!(step === -1 && index % 3 === 0) && !(step === 1 && index % 3 === 2)) {
    form.elements[index + step]?.focus()
  }
}

const EditableRow = (props) => {
  const { row, onSave } = props
  const [formState, setFormState] = useState(row)
  const productos = useSelector((state) => state.productos)
  const clientes = useSelector((state) => state.clientes)

  const keyDownHandler = useCallback(
    (event) => {
      if (event.target.nodeName === 'INPUT') {
        switch (event.keyCode) {
          default:
            break
          case 37:
            setFocus(event, -1)
            break
          case 38:
            setFocus(event, -3)
            break
          case 39:
            setFocus(event, +1)
            break
          case 40:
            setFocus(event, +3)
            break
          case 13:
            if (
              event.target.id === 'REMPRE' &&
              parseInt(event.target.dataset?.rowid) === row.ID
            ) {
              if (
                parseInt(row.PRODCOD) !== parseInt(formState.PRODCOD) ||
                parseInt(row.REMCAN) !== parseInt(formState.REMCAN) ||
                parseFloat(row.REMPRE) !== parseFloat(formState.REMPRE)
              ) {
                if (formState.PRODCOD !== '') {
                  if (formState.PRODDES === NOT_FOUND) {
                    return message.error('Código de Producto No Existe')
                  }
                  if (!parseInt(formState.REMCAN)) {
                    return message.error('Cantidad No Puede Ser 0')
                  }
                  if (!parseFloat(formState.REMPRE)) {
                    return message.error('Precio No Puede Ser 0')
                  }
                } else if (!parseInt(formState.REMCAN)) {
                  return
                }

                onSave(formState)
                setFormState(row) // Reset empty row
                setFocus(event, 1)
              }
            } else {
              setFocus(event, 1)
            }
            break
        }
      }
    },
    [row, formState, onSave]
  )

  useEffect(() => {
    setFormState(row)
  }, [row])

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => document.removeEventListener('keydown', keyDownHandler)
  }, [keyDownHandler])

  const handleChange = (e) => {
    let PRODDES = NOT_FOUND
    let REMPRE = 0
    let TIPCOD = ''
    if (e.target.id === 'PRODCOD') {
      const producto = productos.records.find(
        (p) => p.PRODCOD === e.target.value
      )
      PRODDES = producto?.PRODDES || NOT_FOUND
      REMPRE = producto?.PRODPRE || 0
      TIPCOD = producto?.TIPCOD || ''

      const tipo = clientes.tipos.find((tipo) => tipo.TIPCOD === TIPCOD)
      if (tipo) {
        REMPRE = tipo.CLIPRODPRE
      }

      setFormState((data) => ({
        ...data,
        [e.target.id]: e.target.value,
        PRODDES,
        REMPRE
      }))
    } else {
      setFormState((data) => ({
        ...data,
        [e.target.id]: e.target.value
      }))
    }
  }

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
