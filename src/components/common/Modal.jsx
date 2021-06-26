import React from "react";
import { Modal as AntdModal } from "antd";

const Modal = (props) => {
  const { title, isModalVisible, onClose, width, okText, onOk } = props;
  return (
    <AntdModal
      width={width}
      title={title || ""}
      visible={isModalVisible}
      onCancel={onClose}
      onOk={onOk}
      okText={okText}
    >
      {props.children}
    </AntdModal>
  );
};

export default Modal;
