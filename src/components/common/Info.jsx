import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Descriptions, Row, Col } from "antd";
import { getSelectList } from "../../utils/helpers";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import notification from "./notification";

const Info = (props) => {
  const globalState = useSelector((state) => state);
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
    <>
      <Row>
        <Col span={18}>
          <Descriptions title={props.title} layout="vertical" bordered>
            {props.data
              .filter((field) => field.title)
              .map((field, index) => {
                let value = field.value;
                if (field.options) {
                  const data = globalState[field.options]
                    ? globalState[field.options].records
                    : [];
                  const valuesList = getSelectList(field.options, data);

                  value = field.value
                    ? valuesList.find((item) => item.id === field.value).text
                    : value;
                }
                return (
                  <Descriptions.Item key={index} label={field.title}>
                    <strong>{value}</strong>
                  </Descriptions.Item>
                );
              })}
          </Descriptions>
          <br />
        </Col>
      </Row>
      <Row>
        <Col offset={3} span={10}>
          {props.onEdit && <EditButton handleEdit={props.onEdit} />}
        </Col>
        <Col>
          {props.onDelete && <DeleteButton handleDelete={props.onDelete} />}
        </Col>
      </Row>
    </>
  );
};

export default Info;
