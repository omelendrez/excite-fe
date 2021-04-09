import React, { useEffect } from "react";
import { Descriptions, Space, Row, Col } from "antd";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import notification from "./notification";

const Info = (props) => {
  useEffect(() => {
    if (props.record && props.record.message && !props.error) {
      notification({
        message: "Registro eliminado",
        description: "El registro fue eliminado con éxito",
        type: "info",
      });
    }
    if (props.error) {
      notification({
        message: "Error",
        description: "Error al intentar eliminar el registro",
        type: "error",
      });
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
