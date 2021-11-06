import React from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const BackButton = (props) => {
  return (
    <Button
      icon={<ArrowLeftOutlined />}
      onClick={props.onBack}
      shape="round"
      className="back-button"
    >
      Volver
    </Button>
  );
};

export default BackButton;
