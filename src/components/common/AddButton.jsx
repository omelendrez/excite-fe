import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddButton = (props) => {
  return (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      onClick={props.onAdd}
      shape="round"
      disabled={props.disabled}
    >
      Agregar
    </Button>
  );
};

export default AddButton;
