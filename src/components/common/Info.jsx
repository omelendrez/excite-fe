import React from "react";
import { Descriptions, Space, Row, Col } from "antd";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Info = (props) => {
  return (
    <Row>
      <Col span={20}>
        <Descriptions title={props.title} layout="vertical" bordered>
          {props.data
            .filter((field) => field.title)
            .map((field) => (
              <Descriptions.Item key={field.name} label={field.title}>
                <strong>{field.value}</strong>
              </Descriptions.Item>
            ))}
        </Descriptions>
        <br />
        <Space>
          {props.onEdit && <EditButton handleEdit={props.onEdit} />}
          {props.onDelete && <DeleteButton handleDelete={props.onDelete} />}
        </Space>
      </Col>
    </Row>
  );
};

export default Info;
