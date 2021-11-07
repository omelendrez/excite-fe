import moment from 'moment'
import 'moment/locale/es'
import tableFields from './commonTableFields.json'

export const sortColumn = (a, b, fieldName) =>
  a[fieldName] < b[fieldName] ? -1 : a[fieldName] > b[fieldName] ? 1 : 0

export const formatAmount = (value = 0) =>
  `$ ${Number.parseFloat(value).toFixed(2)}`.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  )

export const formatDate = (date) => moment(date).format('L')
export const formatDateNow = () => moment().format('DD/MM/YY')
export const formatTimeNow = () => moment().format('HH:MM')
//export const formatDate = (date) => moment(date).add(-3, "hours").format("L");  // For local environment
export const formatInputDate = (date) => moment(date)
export const formatDatePost = (date) => moment(date).format('YYYY-MM-DD')

const createSelectList = (records, id, text, filter = null) => {
  const uniqueList = []
  records
    .filter((item) => !filter || item[filter].toLowerCase() === 'activo')
    .forEach((record) => {
      if (!uniqueList.find((item) => item.id === record[id])) {
        uniqueList.push({
          id: record[id],
          text: `${record[id]} - ${record[text]}`
        })
      }
    })
  return uniqueList.sort((a, b) => sortColumn(a, b, 'text'))
}

export const statuses = [
  { id: 'A', text: 'ACTIVO' },
  { id: 'I', text: 'INACTIVO' }
]

export const sexos = [
  { id: 'I', text: 'INDEFINIDO' },
  { id: 'F', text: 'FEMENINO' },
  { id: 'M', text: 'MASCULINO' }
]

export const interior = [
  { id: 'BAHIA BLANCA', text: 'BAHIA BLANCA' },
  { id: 'INTERIOR', text: 'INTERIOR' }
]

export const tiposPago = [
  { id: 'Efectivo', text: 'Efectivo' },
  { id: 'Cheque', text: 'Cheque' },
  { id: 'Otros', text: 'Otros' },
  { id: 'Deposito', text: 'Depósito' }
]

export const getSelectList = (modelName, data) => {
  let table = data
  const field = tableFields.find((model) => model.model === modelName)
  switch (modelName) {
    case 'statuses':
      table = statuses
      break
    case 'sexos':
      table = sexos
      break
    case 'interior':
      table = interior
      break
    default:
  }
  return createSelectList(table, field.id, field.text, field.status)
}

export const setFields = (fields, record) => {
  return fields.map((field) => ({
    title: field.title,
    value: record[field.name],
    options: field.options,
    type: field.type
  }))
}

export const cleanFields = (fields, record) => {
  const values = {}
  fields.forEach((field) => {
    if (!field.hidden || field.name === 'ID') {
      values[field.name] =
        field.type !== 'date'
          ? record[field.name]
          : moment(record[field.name]).format('YYYY-MM-DD')
    }
  })
  return values
}

export const createNewRecord = (fields) => {
  const record = {}
  fields
    .filter((field) => field.name !== 'ID' && !field.readonly)
    .forEach((field) => {
      switch (field.type) {
        default:
          record[field.name] = ''
          break
        case 'number':
          record[field.name] = 0
          break
        case 'date':
          record[field.name] = undefined
          break
      }
    })

  return record
}

export const timeout = (delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve(), delay)
  })
}


/**
 * @param {css styles} styles: string
 * @returns a closure
 */
function createConsoleMessage(styles) {
  return function (message) {
    if (process.env.REACT_APP_SENTRY_ENV === 'production') return
    console.log(`%c ${typeof message === 'object' ? JSON.stringify(message) : message} `, styles)
  }
}

/**
 * Usage:
 * import { log } from '../functions/utils'
 * log.info('Test of log')
 */
export const log = {
  info: createConsoleMessage('background:blue;color:white;'),
  warning: createConsoleMessage('background:orange;color:black;'),
  error: createConsoleMessage('background:red;color:white;'),
  success: createConsoleMessage('background:green;color:white;')
}
