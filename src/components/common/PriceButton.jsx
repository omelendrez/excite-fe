import React from "react";
import { Button } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";

const PriceButton = (props) => {
  return (
    <Button
      icon={<DollarCircleOutlined />}
      onClick={props.onPrice}
      shape="round"
    >
      Cambiar Precios
    </Button>
  );
};

export default PriceButton;
