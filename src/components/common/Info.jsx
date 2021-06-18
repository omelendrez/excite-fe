import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Spin } from "antd";
import { getSelectList } from "utils/helpers";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import PrintButton from "./PrintButton";
import { formatDate, formatAmount } from "utils/helpers";
import "./info.css";

const Info = (props) => {
  const globalState = useSelector((state) => state);
  if (props.loading) {
    return <Spin />;
  }
  return (
    <>
      <Row>
        <Col span={24}>
          <div>
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
                  <div className="info-row" key={index}>
                    <div className="info-label">{field.title}</div>
                    <div className="info-value">{value}</div>
                  </div>
                );
              })}
          </div>
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
    </>
  );
};

export default Info;
