import { Form, Input, InputNumber, Select } from "antd";
const { TextArea } = Input;
const { Option } = Select;

const InputField = (props) => {
  const { field, optionGroups } = props;
  switch (field.type) {
    default:
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <Input
            style={{ width: field.width }}
            allowClear
            readOnly={field.readonly}
          />
        </Form.Item>
      );
    case "ID":
      return (
        <Form.Item name={[field.name]} noStyle>
          <Input type="hidden" />
        </Form.Item>
      );
    case "textarea":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <TextArea rows={field.rows} allowClear />
        </Form.Item>
      );
    case "number":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <InputNumber />
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
          >
            {optionGroups &&
              optionGroups[field.options].map((option) => (
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
