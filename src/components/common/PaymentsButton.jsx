import React from "react";
import { Button } from "antd";
import { DollarOutlined } from "@ant-design/icons";

const PaymentsButton = (props) => {
  return (
    <Button
      icon={<DollarOutlined />}
      onClick={props.handlePayments}
      shape="round"
    >
      Pagos
    </Button>
  );
};

export default PaymentsButton;
