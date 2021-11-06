import React from "react";
import { Button } from "antd";
import { CalculatorTwoTone } from "@ant-design/icons";

const InvoiceButton = (props) => {
  return (
    <Button
      icon={<CalculatorTwoTone />}
      onClick={props.onInvoice}
      shape="round"
    >
      Factura
    </Button>
  );
};

export default InvoiceButton;
