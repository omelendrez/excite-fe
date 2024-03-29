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
  const { field, optionsModels, handleModal } = props;

  const handleKey = (e) => {
    const inputs = document.getElementsByTagName("input");

    let increment = 0;

    switch (e.code) {
      case "NumpadEnter":
        increment = 1;
        break;
      case "F4":
        handleModal && handleModal();
        break;
      default:
        return;
    }
    let curIndex = 0;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === e.target) {
        curIndex = i;
        break;
      }
    }
    if (curIndex >= 0 && curIndex < inputs.length - 1) {
      inputs[curIndex + increment].focus();
    }
  };

  const commonProps = {
    style: { width: field.width },
    readOnly: field.readonly,
    maxLength: field.size,
    onKeyDown: handleKey,
    align: field.align,
    execute: field.execute,
    rows: field.rows, // textarea
    onChange: field.getSelectedValue || field.onChange,
  };

  const selectProps = {
    showSearch: true,
    placeholder: "Seleccione uno",
    optionFilterProp: "children",
    onChange: field.getSelectedValue,
    defaultOpen: field.defaultOpen,
    autoFocus: !!field.defaultOpen,
    filterOption: (input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
    filterSort: (optionA, optionB) =>
      optionA.children
        .toLowerCase()
        .localeCompare(optionB.children.toLowerCase()),
    dropdownRender: (menu) => (
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
              <Button type="primary" onClick={() => props.addOption(field)}>
                <PlusOutlined /> Nuevo
              </Button>
            </div>
          </>
        )}
      </div>
    ),
  };

  if (field.hidden || field.readonly) {
    return (
      <Form.Item name={[field.name]} noStyle>
        <Input type="hidden" {...commonProps} />
      </Form.Item>
    );
  }
  switch (field.type) {
    default:
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <Input {...commonProps} />
        </Form.Item>
      );
    case "date":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <DatePicker format="DD-MM-YYYY" {...commonProps} />
        </Form.Item>
      );
    case "textarea":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <TextArea rows={field.rows} {...commonProps} />
        </Form.Item>
      );
    case "percent":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <InputNumber
            {...commonProps}
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace("%", "")}
            onFocus={(event) => event.target.select()}
          />
        </Form.Item>
      );
    case "number":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <InputNumber
            {...commonProps}
            onFocus={(event) => event.target.select()}
          />
        </Form.Item>
      );
    case "amount":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <InputNumber
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "")
            }
            onFocus={(event) => event.target.select()}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            {...commonProps}
          />
        </Form.Item>
      );
    case "select":
      return (
        <Form.Item label={field.title} name={[field.name]} rules={field.rules}>
          <Select {...selectProps} {...commonProps}>
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
