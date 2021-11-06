import React from "react";
import { Button } from "antd";
import { DollarCircleTwoTone } from "@ant-design/icons";

const PriceButton = (props) => {
  return (
    <Button
      icon={<DollarCircleTwoTone />}
      onClick={props.onPrice}
      shape="round"
    >
      Cambiar Precios
    </Button>
  );
};

export default PriceButton;
