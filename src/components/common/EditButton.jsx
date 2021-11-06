import React from "react";
import { Button } from "antd";
import { EditTwoTone } from "@ant-design/icons";

const EditButton = (props) => {
  return (
    <Button icon={<EditTwoTone />} onClick={props.handleEdit} shape="round">
      Modificar
    </Button>
  );
};

export default EditButton;
