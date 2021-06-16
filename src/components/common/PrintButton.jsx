import React from "react";
import { Button, message } from "antd";
import { PrinterOutlined } from "@ant-design/icons";

const PrintButton = (props) => {
  const handlePrint = () => {
    message.error("Implementación en progreso");
  };
  return (
    <Button icon={<PrinterOutlined />} onClick={handlePrint}>
      Imprimir
    </Button>
  );
};

export default PrintButton;
