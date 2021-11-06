import React from "react";
import { Button } from "antd";
import { DollarTwoTone } from "@ant-design/icons";

const PaymentsButton = (props) => {
  return (
    <Button
      icon={<DollarTwoTone />}
      onClick={props.handlePayments}
      shape="round"
    >
      Pagos
    </Button>
  );
};

export default PaymentsButton;
