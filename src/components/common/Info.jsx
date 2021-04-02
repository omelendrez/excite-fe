import React from "react";
import { Descriptions, Space } from "antd";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Info = (props) => {
  const handleEdit = () => {
    console.log(props.id);
  };
  const handleDelete = () => {
    console.log(props.id);
  };
  return (
    <>
      <Descriptions title={props.title} layout="vertical" bordered>
        {props.data
          .filter((field) => field.title)
          .map((field) => (
            <Descriptions.Item label={field.title}>
              {field.value}
            </Descriptions.Item>
          ))}
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
