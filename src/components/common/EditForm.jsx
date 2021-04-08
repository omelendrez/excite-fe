import React, { useEffect } from "react";
import { Space, Form, message } from "antd";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
import InputField from "./InputField";

const EditForm = (props) => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (props.success) {
      message.success("Registro actualizado satisfactoriamente");
    }
    if (props.error) {
      message.error("Error al guardar el registro");
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
