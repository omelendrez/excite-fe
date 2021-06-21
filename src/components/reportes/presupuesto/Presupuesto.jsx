import React from "react";
import { useSelector } from "react-redux";
import "./presupuesto.scss";

import headers from "./headers.json";

const Presupuesto = (props) => {
  const { record } = useSelector((state) => state.remitos);
  return (
    <div className="presupuesto">
      <div className="header-left border">
        <div className="logo"></div>
        {headers.map((header, index) => (
          <div key={index}>{header}</div>
        ))}
        <div className="document-name">
          <div className="document-name-header">PRESUPUESTO</div>
          <div className="document-name-sub-header">(detallado)</div>
        </div>
      </div>
      <div className="header-right">
        <div className="sub-header-top border">
          <div className="sub-header-top-row">
            <div className="label">Fecha</div>
            <div className="value">30/10/20</div>
          </div>
          <div className="sub-header-top-row">
            <div className="label">Hora</div>
            <div className="value">10:01</div>
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
              {record.REMNUM.toString().padStart(8, "0")}
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
  );
};

export default Presupuesto;
