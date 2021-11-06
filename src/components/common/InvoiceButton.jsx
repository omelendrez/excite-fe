import React from "react";
import { Button } from "antd";
import { CalculatorOutlined } from "@ant-design/icons";

const InvoiceButton = (props) => {
  return (
    <Button
      icon={<CalculatorOutlined />}
      onClick={props.onInvoice}
      shape="round"
    >
      Factura
    </Button>
  );
};

export default InvoiceButton;
