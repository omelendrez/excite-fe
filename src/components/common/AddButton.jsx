import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const SaveButton = (props) => {
  return (
    <Button type="primary" icon={<PlusOutlined />} onClick={props.onAdd}>
      Agregar registro
    </Button>
  );
};

export default SaveButton;
