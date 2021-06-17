import React from "react";
import { Button } from "antd";
import { UndoOutlined } from "@ant-design/icons";

const EditButton = (props) => {
  return (
    <Button icon={<UndoOutlined />} onClick={props.handleReset} shape="round">
      Deshacer
    </Button>
  );
};

export default EditButton;
