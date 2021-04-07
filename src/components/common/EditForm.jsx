import React from "react";
import { Space, Form } from "antd";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
import InputField from "./InputField";

const EditForm = (props) => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

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
        props.fields.map((field, index) => (
          <InputField
            key={index}
            field={field}
            record={props.record}
            optionGroups={props.optionGroups}
          />
        ))}
      <Space>
        <SaveButton />
        <ResetButton handleReset={onReset} />
      </Space>
    </Form>
  );
};

export default EditForm;
