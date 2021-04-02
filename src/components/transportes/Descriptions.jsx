import React from "react";
import { Descriptions, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Info = (props) => {
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
        <Button icon={<EditOutlined />}>Modificar</Button>
        <Button icon={<DeleteOutlined />} danger>
          Eliminar
        </Button>
      </Space>
    </>
  );
};

export default Info;
