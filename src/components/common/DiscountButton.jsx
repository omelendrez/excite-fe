import React from "react";
import { Button } from "antd";
import { PercentageOutlined } from "@ant-design/icons";

const DiscountButton = (props) => {
  return (
    <Button
      icon={<PercentageOutlined />}
      onClick={props.onDiscount}
      shape="round"
    >
      Descuento
    </Button>
  );
};

export default DiscountButton;
