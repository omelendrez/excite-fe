import React from "react";
import { Descriptions, Space, Row, Col } from "antd";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Info = (props) => {
  const handleEdit = () => {
    console.log(props.id);
  };
  const handleDelete = () => {
    console.log(props.id);
  };
  return (
    <Row>
      <Col span={20}>
        <Descriptions title={props.title} layout="vertical" bordered>
          {props.data
            .filter((field) => field.title)
            .map((field) => (
              <Descriptions.Item label={field.title}>
                <strong>{field.value}</strong>
              </Descriptions.Item>
            ))}
        </Descriptions>
        <br />
        <Space>
          <EditButton handleEdit={handleEdit} />
          <DeleteButton handleDelete={handleDelete} />
        </Space>
      </Col>
    </Row>
  );
};

export default Info;
