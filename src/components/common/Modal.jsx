import React from "react";
import { Modal as AntdModal } from "antd";

const Modal = (props) => {
  const { title, isModalVisible, onClose, width, okText, onOk, maskClosable } = props;
  return (
    <AntdModal
      width={width}
      title={title || ""}
      visible={isModalVisible}
      onCancel={onClose}
      onOk={onOk}
      okText={okText}
      maskClosable={maskClosable}
    >
      {props.children}
    </AntdModal>
  );
};

export default Modal;
