import React from "react";
import { Modal as AntdModal } from "antd";

const Modal = (props) => {
  const { title, isModalVisible, onClose } = props;
  return (
    <AntdModal
      width="40vw"
      title={title || ""}
      visible={isModalVisible}
      onCancel={onClose}
      footer={null}
    >
      {props.children}
    </AntdModal>
  );
};

export default Modal;
