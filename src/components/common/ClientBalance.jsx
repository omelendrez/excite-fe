import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "./clientBalance.scss";

const ClientBalance = (props) => {
  return (
    <div className="site-statistic-card">
      <Row>
        {props.columns.map((col) => (
          <Col span={5} key={col.TYPE}>
            <Card>
              <Statistic
                title={col.TYPE}
                value={Math.abs(col.AMOUNT)}
                precision={2}
                valueStyle={{
                  color: col.AMOUNT < 0 ? "#3f8600" : "#cf1322",
                  fontWeight: col.TYPE === "Balance Actual" ? "bold" : "",
                }}
                prefix="$"
                suffix={
                  col.AMOUNT < 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ClientBalance;
