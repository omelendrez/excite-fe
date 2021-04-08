import React from "react";
import { Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const SaveButton = (props) => {
  return (
    <Button type="primary" icon={<SaveOutlined />} htmlType="submit" {...props}>
      Guardar
    </Button>
  );
};

export default SaveButton;
