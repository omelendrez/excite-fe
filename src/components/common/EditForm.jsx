import React, { useEffect, useState } from "react";
import { Form, Row, Col, Modal } from "antd";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
import InputField from "./InputField";
import notification from "./notification";
import Tipos from "components/tipos/TipoForm";
import Subtipos from "components/subtipos/SubtipoForm";
import { formatInputDate } from "utils/helpers";

const components = {
  Tipos,
  Subtipos,
};

const EditForm = (props) => {
  const [form] = Form.useForm();
  const [modalVisible, setmodalVisible] = useState(false);
  const [componentName, setComponentName] = useState("");
  const [record, setRecord] = useState({});

  const onReset = () => {
    form.resetFields();
  };

  const toggleModal = (options) => {
    setComponentName(options);
    setmodalVisible(!modalVisible);
  };

  const FormComponent = componentName.length
    ? components[componentName.charAt(0).toUpperCase() + componentName.slice(1)]
    : null;

  useEffect(() => {
    form.resetFields();
  }, [record, form]);

  useEffect(() => {
    const record = {};
    props.fields.forEach((field) => {
      switch (field.type) {
        default:
          record[field.name] = props.record[field.name] || "";
          break;
        case "date":
          record[field.name] = formatInputDate(
            props.record[field.name] || undefined
          );
          break;
        case "number":
        case "amount":
          record[field.name] =
            +props.record[field.name] || (field.name === "ID" ? undefined : 0);
          break;
      }
    });
    if (props.changeFieldValues && props.changeFieldValues.length) {
      props.changeFieldValues.forEach(
        (field) => (record[field.name] = field.value)
      );
    }
    setRecord(record);
  }, [props]);

  useEffect(() => {
    if (props.success) {
      props.history && props.history.goBack();
    }
    if (props.error) {
      notification({
        message: "Error",
        description: "Error al intentar guardar los datos",
        type: "error",
      });
    }
  }, [props.success, props.error, props.history]);

  const modalStyles = {
    width: "40vw",
    style: { left: "-15vw", top: 10 },
  };

  if (!record) return null;

  return (
    <>
      <Form
        form={form}
        onFinish={props.onFinish}
        initialValues={record}
        labelCol={{
          span: props.maximize ? 5 : 2,
        }}
        wrapperCol={{
          span: props.maximize ? 16 : 8,
        }}
      >
        {props.fields &&
          props.fields.map((field) => (
            <InputField
              key={field.name}
              field={field}
              record={record}
              optionsModels={props.optionsModels}
              addOption={() => toggleModal(field.options)}
            />
          ))}
        <Row>
          <Col offset={props.maximize ? 5 : 2} span={props.maximize ? 6 : 3}>
            <SaveButton loading={props.loading} />
          </Col>
          <Col>
            <ResetButton handleReset={onReset} />
          </Col>
        </Row>
      </Form>
      <Modal
        visible={modalVisible}
        onCancel={toggleModal}
        footer={null}
        {...modalStyles}
      >
        {componentName.length > 0 && (
          <FormComponent record={{ ID: 0 }} maximize={true} />
        )}
      </Modal>
    </>
  );
};

export default EditForm;
