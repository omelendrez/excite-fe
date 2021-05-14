import React, { useEffect, useState } from "react";
import { Form, Row, Col, Modal } from "antd";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
import InputField from "./InputField";
import notification from "./notification";
import Tipos from "../transportes/TransporteForm";
import Subtipos from "../subtipos/SubtipoForm";
import { formatInputDate } from "../../utils/helpers";

const components = {
  Tipos,
  Subtipos,
};

const EditForm = (props) => {
  const [form] = Form.useForm();
  const [modalVisible, setmodalVisible] = useState(false);
  const [componentName, setComponentName] = useState("");
  const [record, setRecord] = useState(null);

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
    for (const field in props.record) {
      const fld = props.fields.find((fld) => fld.name === field);
      if (!fld) {
        console.log(field);
      }
      record[field] =
        fld.type === "date"
          ? formatInputDate(props.record[field])
          : props.record[field];
    }
    setRecord(record);
  }, [props]);

  useEffect(() => {
    if (props.success) {
      notification({
        message: "Datos guardados",
        description: "Los datos se guardaron satisfactoriamente",
        type: "success",
      });
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
