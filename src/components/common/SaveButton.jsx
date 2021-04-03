import React from "react";
import { Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const SaveButton = () => {
  return (
    <Button type="primary" icon={<SaveOutlined />} htmlType="submit">
      Guardar
    </Button>
  );
};

export default SaveButton;
