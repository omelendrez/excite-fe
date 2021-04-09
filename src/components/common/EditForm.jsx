import React, { useEffect } from "react";
import { Space, Form } from "antd";
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
        span: 3,
      }}
      wrapperCol={{
        span: 8,
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
      <Space>
        <SaveButton loading={props.loading} />
        <ResetButton handleReset={onReset} />
      </Space>
    </Form>
  );
};

export default EditForm;
