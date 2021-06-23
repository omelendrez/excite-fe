import React from "react";
import { Button } from "antd";
import { FormOutlined } from "@ant-design/icons";

const QuotationsButton = (props) => {
  return (
    <Button
      icon={<FormOutlined />}
      onClick={props.handleQuotations}
      shape="round"
    >
      Presupuestos
    </Button>
  );
};

export default QuotationsButton;
