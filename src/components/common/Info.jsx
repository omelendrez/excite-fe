import React, { useEffect } from "react";
import { Descriptions, Space, Row, Col, message } from "antd";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Info = (props) => {
  useEffect(() => {
    if (props.record.message && !props.error) {
      return message.success("Registro eliminado");
    }
    if (props.error) {
      message.error("Error al eliminar el registro");
    }
  }, [props]);

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
