import React, { useEffect, useState } from "react";
import { Descriptions, Space, Row, Col, message } from "antd";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Info = (props) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (props.success) {
      if (!props.data.ID) {
        setTimeout(() => {
          setDone(true);
        }, 2000);
      }
    }
    if (props.error) {
      message.error("Error al eliminar el registro");
    }
  }, [props.data, props.success, props.error]);

  if (done) {
    props.history.goBack();
  }

  return (
    <Row>
      <Col span={20}>
        <Descriptions title={props.title} layout="vertical" bordered>
          {props.data
            .filter((field) => field.title)
            .map((field, index) => (
              <Descriptions.Item key={index} label={field.title}>
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
