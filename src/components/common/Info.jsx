import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Spin } from "antd";
import { getSelectList } from "utils/helpers";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import PrintButton from "./PrintButton";
import PaymentsButton from "./PaymentsButton";
import ConceptsButton from "./ConceptsButton";
import QuotationsButton from "./QuotationsButton";
import PriceButton from "./PriceButton";
import DiscountButton from "./DiscountButton";
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
                  value = content ? `${content.text}` : `${value} - ???`;
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
          <Col>
            <EditButton handleEdit={props.onEdit} />
          </Col>
        )}
        {props.onPrint && (
          <Col>
            <PrintButton onPrint={props.onPrint} />
          </Col>
        )}
        {props.onQuotations && (
          <Col>
            <QuotationsButton handleQuotations={props.onQuotations} />
          </Col>
        )}
        {props.onConcepts && (
          <Col>
            <ConceptsButton handleConcepts={props.onConcepts} />
          </Col>
        )}
        {props.onPayments && (
          <Col>
            <PaymentsButton handlePayments={props.onPayments} />
          </Col>
        )}
        {props.onPrice && (
          <Col>
            <PriceButton onPrice={props.onPrice} />
          </Col>
        )}
        {props.onDiscount && (
          <Col>
            <DiscountButton onDiscount={props.onDiscount} />
          </Col>
        )}
        {props.onDelete && (
          <Col>
            <DeleteButton handleDelete={props.onDelete} />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Info;
