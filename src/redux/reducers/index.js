import { combineReducers } from 'redux'
import ajustesReducer from './ajustes'
import clientesReducer from './clientes'
import conceptosReducer from './conceptos'
import estadosReducer from './estados'
import facturasReducer from './facturas'
import ivasReducer from './ivas'
import numerosReducer from './numeros'
import pagosReducer from './pagos'
import porcivaReducer from './porciva'
import productosReducer from './productos'
import provinciasReducer from './provincias'
import remitosReducer from './remitos'
import reportsReducer from './reports'
import subtiposReducer from './subtipos'
import tiposReducer from './tipos'
import transportesReducer from './transportes'
import vendedoresReducer from './vendedores'
import wakeUpReducer from './wakeUp'

const rootReducer = combineReducers({
  ajustes: ajustesReducer,
  clientes: clientesReducer,
  conceptos: conceptosReducer,
  estados: estadosReducer,
  facturas: facturasReducer,
  ivas: ivasReducer,
  numeros: numerosReducer,
  pagos: pagosReducer,
  porciva: porcivaReducer,
  productos: productosReducer,
  provincias: provinciasReducer,
  remitos: remitosReducer,
  reports: reportsReducer,
  subtipos: subtiposReducer,
  tipos: tiposReducer,
  transportes: transportesReducer,
  vendedores: vendedoresReducer,
  wakeUp: wakeUpReducer
})

export default rootReducer
