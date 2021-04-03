import React from "react";
import { Form, Input, Space } from "antd";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
const { TextArea } = Input;

const TextField = (props) => {
  const { field, record } = props;
  switch (field.type) {
    default:
      return (
        <Form.Item
          label={field.title}
          name={[field.name]}
          rules={field.rules}
          initialValue={record[field.name]}
        >
          <Input style={{ width: field.width }} allowClear />
        </Form.Item>
      );
    case "textarea":
      return (
        <Form.Item
          label={field.title}
          name={[field.name]}
          rules={field.rules}
          initialValue={record[field.name]}
        >
          <TextArea rows={field.rows} allowClear />
        </Form.Item>
      );
  }
};

const EditForm = (props) => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={props.onFinish}
      labelCol={{
        span: 3,
      }}
      wrapperCol={{
        span: 8,
      }}
    >
      {props.fields &&
        props.fields
          .filter((field) => !!field.title && !field.readonly)
          .map((field, index) => (
            <TextField key={index} field={field} record={props.record} />
          ))}
      <Space>
        <SaveButton />
        <ResetButton handleReset={onReset} />
      </Space>
    </Form>
  );
};

export default EditForm;
