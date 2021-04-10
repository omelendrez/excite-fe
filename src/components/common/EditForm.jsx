import React, { useEffect, useState } from "react";
import { Form, Row, Col, Modal } from "antd";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
import InputField from "./InputField";
import notification from "./notification";
import Tipos from "../transportes/TransporteForm";
import Subtipos from "../transportes/TransporteForm";

const EditForm = (props) => {
  const [form] = Form.useForm();
  const [modalVisibleTipos, setModalVisibleTipos] = useState(false);
  const [modalVisibleSubtipos, setModalVisibleSubipos] = useState(false);

  const onReset = () => {
    form.resetFields();
  };

  const onAddOption = (field) => {
    switch (field.options) {
      default:
      case "tipos":
        return setModalVisibleTipos(true);
      case "subtipos":
        return setModalVisibleSubipos(true);
    }
  };

  const handleOnCancel = (options) => {
    switch (options) {
      default:
      case "tipos":
        return setModalVisibleTipos(false);
      case "subtipos":
        return setModalVisibleSubipos(false);
    }
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

  const modalStyles = {
    width: "40vw",
    style: { left: "-15vw", top: 10 },
  };

  return (
    <>
      <Form
        form={form}
        onFinish={props.onFinish}
        initialValues={props.record}
        labelCol={{
          span: props.maximize ? 5 : 2,
        }}
        wrapperCol={{
          span: props.maximize ? 16 : 6,
        }}
      >
        {props.fields &&
          props.fields.map((field) => (
            <InputField
              key={field.name}
              field={field}
              record={props.record}
              optionGroups={props.optionGroups}
              addOption={onAddOption}
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
        visible={modalVisibleTipos}
        onCancel={() => handleOnCancel("tipos")}
        footer={null}
        {...modalStyles}
      >
        <Tipos record={{ ID: 0 }} maximize={true} />
      </Modal>
      <Modal
        visible={modalVisibleSubtipos}
        onCancel={() => handleOnCancel("subtipos")}
        footer={null}
        {...modalStyles}
      >
        <Subtipos record={{ ID: 0 }} maximize={true} />
      </Modal>
    </>
  );
};

export default EditForm;
