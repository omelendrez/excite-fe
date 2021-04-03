import React from "react";
import { Form, Input, Button } from "antd";
const { TextArea } = Input;

const TextField = (props) => {
  const { field } = props;
  switch (field.type) {
    default:
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <Input style={{ width: field.width }} allowClear />
        </Form.Item>
      );
    case "textarea":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
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
          .map((field, index) => <TextField key={index} field={field} />)}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Guardar
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Deshacer
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditForm;
