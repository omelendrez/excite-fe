import React from "react";
import { Button, message } from "antd";
import { PrinterOutlined } from "@ant-design/icons";

const PrintButton = (props) => {
  const noHandlePrint = () => {
    message.error("Implementación en progreso");
  };
  return (
    <Button
      icon={<PrinterOutlined />}
      onClick={props.handlePrint || noHandlePrint}
      shape="round"
    >
      Imprimir
    </Button>
  );
};

export default PrintButton;
