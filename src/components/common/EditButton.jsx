import React from "react";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

const EditButton = (props) => {
  return (
    <Button icon={<EditOutlined />} onClick={props.handleEdit}>
      Modificar
    </Button>
  );
};

export default EditButton;
