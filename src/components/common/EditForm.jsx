import React, { useEffect } from "react";
import { Form, Row, Col } from "antd";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
import InputField from "./InputField";
import notification from "./notification";

const EditForm = (props) => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (props.success) {
      notification({
        message: "Datos guardados",
        description: "Los datos se guardaron satisfactoriamente",
        type: "info",
      });
    }
    if (props.error) {
      notification({
        message: "Error",
        description: "Error al intentar guardar los datos",
        type: "error",
      });
    }
  }, [props.success, props.error]);

  return (
    <Form
      form={form}
      onFinish={props.onFinish}
      initialValues={props.record}
      labelCol={{
        span: 2,
      }}
      wrapperCol={{
        span: 6,
      }}
    >
      {props.fields &&
        props.fields.map((field) => (
          <InputField
            key={field.name}
            field={field}
            record={props.record}
            optionGroups={props.optionGroups}
          />
        ))}
      <Row>
        <Col offset={2} span={3}>
          <SaveButton loading={props.loading} />
        </Col>
        <Col>
          <ResetButton handleReset={onReset} />
        </Col>
      </Row>
    </Form>
  );
};

export default EditForm;
