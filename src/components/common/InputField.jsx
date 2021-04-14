import React from "react";
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Divider,
  Button,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const InputField = (props) => {
  const { field, optionsModels } = props;

  if (field.hidden) {
    return (
      <Form.Item name={[field.name]} noStyle>
        <Input type="hidden" />
      </Form.Item>
    );
  }
  switch (field.type) {
    default:
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <Input style={{ width: field.width }} readOnly={field.readonly} />
        </Form.Item>
      );
    case "date":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <DatePicker format="DD-MM-YYYY" readOnly={field.readonly} />
        </Form.Item>
      );
    case "textarea":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <TextArea rows={field.rows} readOnly={field.readonly} />
        </Form.Item>
      );
    case "number":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <InputNumber readOnly={field.readonly} />
        </Form.Item>
      );
    case "amount":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <InputNumber
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            readOnly={field.readonly}
          />
        </Form.Item>
      );
    case "select":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <Select
            showSearch
            placeholder="Seleccione uno"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
            dropdownRender={(menu) => (
              <div>
                {menu}
                {field.allowAdd && (
                  <>
                    <Divider style={{ margin: "4px 0" }} />
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "nowrap",
                        padding: 8,
                      }}
                    >
                      <Button
                        type="primary"
                        onClick={() => props.addOption(field)}
                      >
                        <PlusOutlined /> Nuevo
                      </Button>
                    </div>
                  </>
                )}
              </div>
            )}
          >
            {optionsModels &&
              optionsModels[field.options].map((option) => (
                <Option key={option.id} value={option.id}>
                  {option.text}
                </Option>
              ))}
          </Select>
        </Form.Item>
      );
  }
};

export default InputField;
