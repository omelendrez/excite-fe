import React from "react";
import { useSelector } from "react-redux";
import { Descriptions, Row, Col } from "antd";
import { getSelectList } from "../../utils/helpers";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { formatDate, formatAmount } from "../../utils/helpers";
import "./info.css";

const Info = (props) => {
  const globalState = useSelector((state) => state);

  return (
    <>
      <Row>
        <Col span={24}>
          <Descriptions title={props.title} layout="vertical" bordered>
            {props.data
              .filter((field) => field.title)
              .map((field, index) => {
                let value;
                switch (field.type) {
                  case "date":
                    value = formatDate(field.value);
                    break;
                  case "amount":
                    value = formatAmount(field.value);
                    break;
                  default:
                    value = field.value;
                    break;
                }
                if (field.options) {
                  const data = globalState[field.options]
                    ? globalState[field.options].records
                    : [];
                  const valuesList = getSelectList(field.options, data);
                  const content = valuesList.find((item) => item.id === value);
                  value = content ? `${content.id} - ${content.text}` : value;
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
        <Col span={2}>
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
