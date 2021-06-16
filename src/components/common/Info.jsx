import React from "react";
import { useSelector } from "react-redux";
import { Descriptions, Row, Col, Spin, Collapse } from "antd";
import { getSelectList } from "utils/helpers";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import PrintButton from "./PrintButton";
import { formatDate, formatAmount } from "utils/helpers";
import "./info.css";
const { Panel } = Collapse;

const Info = (props) => {
  const globalState = useSelector((state) => state);
  if (props.loading) {
    return <Spin />;
  }
  return (
    <Collapse defaultActiveKey={[1]}>
      <Panel key="1" header={props.title || "Detalles"}>
        <Row>
          <Col span={24}>
            <Descriptions layout="vertical" bordered>
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
                    const content = valuesList.find(
                      (item) => item.id === value
                    );
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
          {props.onEdit && (
            <Col span={3}>
              <EditButton handleEdit={props.onEdit} />
            </Col>
          )}
          {props.onDelete && (
            <Col>
              <DeleteButton handleDelete={props.onDelete} />
            </Col>
          )}
          {props.onPrint && (
            <Col>
              <PrintButton handlePrint={props.onPrint} />
            </Col>
          )}
        </Row>
      </Panel>
    </Collapse>
  );
};

export default Info;
