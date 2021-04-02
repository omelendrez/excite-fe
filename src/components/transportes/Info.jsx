import React from "react";
import { Descriptions, Space } from "antd";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";

const Info = (props) => {
  const handleEdit = () => {
    console.log(props.ID);
  };
  const handleDelete = () => {
    console.log(props.ID);
  };
  return (
    <>
      <Descriptions title={props.TRANOM} layout="vertical" bordered>
        <Descriptions.Item label="Código">{props.TRACOD}</Descriptions.Item>
        <Descriptions.Item label="Nombre">{props.TRANOM}</Descriptions.Item>
        <Descriptions.Item label="Domicilio">{props.TRADOM}</Descriptions.Item>
        <Descriptions.Item label="Localidad">{props.TRALOC}</Descriptions.Item>
        <Descriptions.Item label="Teléfono">{props.TRATEL}</Descriptions.Item>
      </Descriptions>
      <br />
      <Space>
        <EditButton handleEdit={handleEdit} />
        <DeleteButton handleDelete={handleDelete} />
      </Space>
    </>
  );
};

export default Info;
