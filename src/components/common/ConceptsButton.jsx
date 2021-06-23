import React from "react";
import { Button } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

const ConceptsButton = (props) => {
  return (
    <Button
      icon={<UnorderedListOutlined />}
      onClick={props.handleConcepts}
      shape="round"
    >
      Conceptos
    </Button>
  );
};

export default ConceptsButton;
