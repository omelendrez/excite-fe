import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Result } from 'antd'
import BackButton from 'components/common/BackButton'
import { formatDateNow, formatTimeNow, formatAmount } from 'utils/helpers'
import './presupuesto.scss'
import headers from './headers.json'

const Presupuesto = (props) => {
  const {
    record: remito,
    items,
    compact
  } = useSelector((state) => state.remitos)
  const { record: cliente } = useSelector((state) => state.clientes)
  const { records: vendedores } = useSelector((state) => state.vendedores)
  const { records: provincias } = useSelector((state) => state.provincias)
  const { records: ivas } = useSelector((state) => state.ivas)
  const { records: transportes } = useSelector((state) => state.transportes)
  const records = props.location.state.source === '1' ? items : compact

  const onBack = () => props.history.goBack()

  useEffect(() => {
    if (remito.REMNUM) {
      window.print()
    }
  }, [remito])

  if (!remito.REMNUM) {
    return (
      <Result
        status="error"
        title="No se pudo cargar el Presupuesto"
        subTitle="Vuelva a la página de Presupuestos y vuelva a intentar."
        extra={
          <Link key="buy" to="/remitos">
            Ir a Presupuestos
          </Link>
        }
      ></Result>
    )
  }
  return (
    <>
      <div className="presupuesto">
        <div className="remito">
          <div className="header-left border">
            <div className="logo"></div>
            {headers.map((header, index) => (
              <div key={index}>{header}</div>
            ))}
            <div className="document-name">
              <div className="document-name-header">PRESUPUESTO</div>
              <div className="document-name-sub-header">
                (
                {props.location.state.source === '1' ? 'detallado' : 'resumido'}
                )
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="sub-header-top border">
              <div className="sub-header-top-row">
                <div className="label">Fecha</div>
                <div className="value">{formatDateNow()}</div>
              </div>
              <div className="sub-header-top-row">
                <div className="label">Hora</div>
                <div className="value">{formatTimeNow()}</div>
              </div>
              <div className="sub-header-top-row">
                <div className="label">Página</div>
                <div className="value">1</div>
              </div>
            </div>
            <div className="sub-header-bottom border">
              <div className="sub-header-bottom-row">
                <div className="label" style={{ marginTop: 3 }}>
                  PRESUPUESTO N.
                </div>
                <div className="value bold courier">
                  {remito.REMNUM.toString().padStart(8, '0')}
                </div>
              </div>
              <div className="sub-header-bottom-row">
                <div className="label">Fecha</div>
                <div className="value">30/10/20</div>
              </div>
              <div className="sub-header-bottom-row">
                <div className="label">Pedido N.</div>
                <div className="value">0</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cliente border">
          <div className="cliente-left">
            <div className="cliente-left-row">
              <div className="label">Cliente</div>
              <div className="value">{cliente.CLINOM}</div>
            </div>
            <div className="cliente-left-row">
              <div className="label">Dirección</div>
              <div className="value">{cliente.CLIDOM}</div>
            </div>
            <div className="cliente-left-row">
              <div className="label">Localidad</div>
              <div className="value">
                {cliente.CLICP} {cliente.CLILOC}
              </div>
            </div>
            <div className="cliente-left-row">
              <div className="label">Provincia</div>
              <div className="value">
                {provincias.find((p) => p.PROCOD === cliente.PROCOD).PRONOM}
              </div>
            </div>
            <div className="cliente-left-row">
              <div className="label">Teléfono</div>
              <div className="value">{cliente.CLITEL}</div>
            </div>
          </div>

          <div className="cliente-right">
            <div className="cliente-right-row">
              <div className="label">C.U.I.T.</div>
              <div className="value">{cliente.CLICUIT}</div>
            </div>
            <div className="cliente-right-row"></div>
            <div className="cliente-right-row">
              <div className="label">Vendedor</div>
              <div className="value">
                {`${
                  vendedores.find((v) => v.VENCOD === cliente.VENCOD).VENNOM
                } - ${cliente.VENCOD}`}
              </div>
            </div>
          </div>
        </div>

        <div className="others border">
          <div className="others-left">
            <div className="others-left-row">
              <div className="label">IVA</div>
              <div className="value">
                {ivas.find((i) => i.IVACOD === cliente.IVACOD).IVADES}
              </div>
            </div>
          </div>
          <div className="others-right">
            <div className="others-right-row">
              <div className="label">Transporte</div>
              <div className="value">
                {transportes.find((t) => t.TRACOD === cliente.TRACOD).TRANOM}
              </div>
            </div>
            <div className="others-right-row">
              <div className="label">Dirección</div>
              <div className="value">
                {transportes.find((t) => t.TRACOD === cliente.TRACOD).TRADOM}
              </div>
            </div>
          </div>
        </div>

        <div className="productos border">
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="cantidad center">Cantidad</th>
                <th className="producto center">Producto</th>
                <th className="detalle">Detalle</th>
                <th className="precio right">Precio Unitario</th>
                <th className="importe right">Importe</th>
              </tr>
            </thead>
            <tbody>
              {records.map((item, index) => (
                <tr key={index}>
                  <td></td>
                  <td className="center">{item.REMCAN}</td>
                  <td className="center">{item.PRODCOD}</td>
                  <td>{item.PRODDES}</td>
                  <td className="right">{formatAmount(item.REMPRE)}</td>
                  <td className="right">
                    {formatAmount(item.REMCAN * item.REMPRE)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bold">
                <td colSpan={2}>Total de Productos:</td>
                <td>
                  {records.reduce(
                    (acc, cur) => acc + parseFloat(cur.REMCAN),
                    0
                  )}
                </td>
                <td colSpan="2" className="subtotal-title">
                  SubTotal del Presupuesto:
                </td>
                <td className="right courier">
                  {formatAmount(
                    records.reduce(
                      (acc, cur) => acc + cur.REMCAN * cur.REMPRE,
                      0
                    )
                  )}
                </td>
              </tr>
              {remito.REMDES > 0 && (
                <tr className="bold">
                  <td colSpan="5" className="subtotal-title">
                    Descuento (-):
                  </td>
                  <td className="right courier">
                    {formatAmount(remito.REMDES)}
                  </td>
                </tr>
              )}
            </tfoot>
          </table>
        </div>

        <div className="total border">
          <div className="total-top">
            <div className="label">IVA Factura N.</div>
            <div className="value">{remito.REMFACNUM}</div>
            <div className="label">Importe</div>
            <div className="value">{formatAmount(0)}</div>
          </div>
          <div className="total-bottom">
            <div className="label">Total a Pagar</div>
            <div className="value">
              {formatAmount(
                records.reduce((acc, cur) => acc + cur.REMCAN * cur.REMPRE, 0) -
                  remito.REMDES
              )}
            </div>
          </div>
        </div>
      </div>
      <BackButton onBack={onBack} />
    </>
  )
}

export default Presupuesto
