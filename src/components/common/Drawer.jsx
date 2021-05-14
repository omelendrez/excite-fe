import React from "react";
import { Drawer as AntdDrawer } from "antd";

const Drawer = (props) => {
  console.log(`%cUsando`, "background:red;color:white");
  const { title, isDrawerVisible, handleClose } = props;
  return (
    <AntdDrawer
      width="40vw"
      title={title}
      visible={isDrawerVisible}
      onClose={handleClose}
    >
      {props.children}
    </AntdDrawer>
  );
};

export default Drawer;
